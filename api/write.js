const fs = require('fs-extra')
const path = require('path')
const os = require('os')
// const CBOR = require('cbor-sync')
// fs.writeFileSync( storePath, buffer, (err) => console.log(err) )

const dataPath = path.join(__dirname, '/../store/data.json')
const data = require(dataPath)

module.exports = function get(req, res) {
	const jsonStr = JSON.stringify(data)
	// console.log(' > json:', jsonStr)

	// console.log(' > tmpdir ' + os.tmpdir())
	const storePath = path.join(os.tmpdir(), '/store.json')
	// console.log(' > storePath ' + storePath)

	fs.writeFileSync(storePath, jsonStr, function (err) { return res.json(JSON.stringify({ error: err })) })

	return res.json( JSON.stringify({ storePath, originalJson: jsonStr }) )
}
