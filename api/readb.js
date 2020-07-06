const fs = require('fs-extra')
const path = require ('path')
const os = require('os')
const CBOR = require('cbor-sync')

module.exports = function get(req, res) {
	const data = {}

	// console.log(' > tmpdir ' + os.tmpdir())
	const storePath = path.join(__dirname, '/../store/store.cbor')
	// console.log(' > storePath ' + storePath)

	fs.readFileSync(storePath, function (err, buffer) {
		if (err) { res.json(JSON.stringify({ error: err })) }
		data = Object.assign( CBOR.decode(buffer), data )
	})

    return res.json( JSON.stringify(data) )
}
