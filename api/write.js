const fs = require('fs-extra')
const path = require('path')
const os = require('os')

const dataPath = path.join(__dirname, '/../store/data.json')
const data = require(dataPath)

module.exports = function get(req, res) {
	const jsonStr = JSON.stringify(data)
	const storePath = path.join(__dirname, '/../store/store.json')

	console.log(' >  write - storePath ' + storePath)

	fs.writeFileSync(storePath, jsonStr, function (err) {
		let jsonData = {}

		if (err || !jsonStr.length ) {
			jsonData = { error: err }
		}

		// else:
		return res.json( JSON.stringify( Object.assign(data, { storePath }, jsonData) ) )
	} )

	/* fs.readFileSync(storePath, function (err, data) {
		if (err || !Object.keys(data).length ) {
			data = { error: err }
		}

		return res.json( JSON.stringify( Object.assign(data, json) ) )
	}) */
}
