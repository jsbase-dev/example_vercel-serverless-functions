const fs = require('fs-extra');
const os = require('os');
const CBOR = require('cbor');

module.exports = function (req, res) {
    fs.readFile(
	path.join(os.tmpdir(), '/store.cbor'),
	function (err, buffer) {
		if (err) return console.error(err);

		let data = CBOR.decode(buffer)

		return res.json(JSON.stringify(data));
	}
);
