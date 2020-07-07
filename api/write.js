const fs = require('fs-extra') // https://github.com/jprichardson/node-fs-extra#methods
const path = require('path')
const os = require('os')

const dataPath = path.join(__dirname, '/../store/data.json')
const data = require(dataPath)

// const storePath = path.join(__dirname, '/../store/store.json')
const storePath = path.join(os.tmpdir(), '/store.json')

console.log(` 📰 Store Path:${storePath}`)

const idx = 0

module.exports = (req, res) => fs.outputFile(storePath, JSON.stringify(data)).then(() => {

	return fs.readJson(storePath).then((err, result) => {
		const response = Object.assign({ id: idx++ }, result, { url: storePath })

		console.log(` 📰 Server response:${JSON.stringify(response)}`)

		return res.status(200).json(response)
	}).catch(( err) => res.status(500).json(err))

}).catch(( err) => res.status(500).json(err))
