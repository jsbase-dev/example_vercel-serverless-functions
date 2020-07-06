const fs = require('fs-extra')
const path = require('path')

const dataPath = path.join(__dirname, '/../store/data.json')
const data = require(dataPath)

const jsonStr = JSON.stringify(data)
const storePath = path.join(__dirname, '/../store/store.json')

module.exports = function get(req, res) {
	console.log(' >  write - storePath ' + storePath)

	fs.writeFileSync(storePath, jsonStr, function (err) {
		let jsonData = {}

		if (err || !jsonStr.length ) {
			jsonData = { error: err }
		}

		// else:
		return res.json( JSON.stringify( Object.assign(data, { storePath, dataPath }, jsonData) ) )
	})
}
