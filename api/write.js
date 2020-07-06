const fs = require('fs-extra')
const path = require('path')
const os = require('os')

module.exports = function get(req, res) {
	const dataPath = path.join(__dirname, '/../store/data.json')
	console.log(' > dataPath:', dataPath)

	const data = require(dataPath)
	console.log(' > data:', data)

	const jsonStr = JSON.stringify(data)
	console.log(' > jsonStr:', jsonStr)

	// const storePath = path.join(__dirname, '/../store/store.json')
	const storePath = path.join(os.tmpdir(), '/store.json')
	console.log(' > storePath:', storePath)

	fs.writeFileSync(storePath, jsonStr, function (err) {
		if (err) { return res.end(`⏰ ${err}`) }
	})

	fs.readFileSync(storePath, function (err, data) {
		if (err) { return res.end(`⏰ ${err}`) }

		const result = JSON.stringify(
			Object.assign(data, { dataPath, storePath })
		)
		console.log(' > result:', result)

		return res.json(result)
	})

	// return res.end(' ⏰ File not created! ')
}
