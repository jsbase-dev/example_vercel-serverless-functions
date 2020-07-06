const fs = require('fs-extra')
const path = require('path')
const os = require('os')

const dataPath = path.join(__dirname, '/../store/data.json')
const data = require(dataPath)

module.exports = function get(req, res) {
	const jsonStr = JSON.stringify(data)

	console.log(' > write - tmpdir ' + os.tmpdir())
	const storePath = path.join(os.tmpdir(), '/store.json')
	console.log(' >  write - storePath ' + storePath)

	fs.writeFileSync(storePath, jsonStr, function (err) { return res.json(JSON.stringify({ error: err })) })

	return res.json( JSON.stringify({ storePath, originalJson: jsonStr }) )
}
