const fs = require('fs-extra')
const path = require ('path')
const os = require('os')

module.exports = function get(req, res) {
	const json = {}
	const storePath = path.join(__dirname, '/../store/store.json')

	fs.readFileSync(storePath, function (err, data) {
		if (err) {
			data = { error: err }
		}

		return res.json( JSON.stringify( Object.assign(data, { storePath }, json) ) )
	})
};
