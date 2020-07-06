const fs = require('fs-extra')
const path = require ('path')
const os = require('os')

module.exports = function get(req, res) {
	const json = {}

    // console.log(' > tmpdir ' + os.tmpdir())
	const storePath = path.join(os.tmpdir(), '/store.json')
	// console.log(' > storePath ' + storePath)

	fs.readFileSync(storePath, function (err, data) {
		if (err) { res.json(JSON.stringify({ error: err })) }
		json = Object.assign( data, json )
	})

	return res.json( JSON.stringify(json) )
};
