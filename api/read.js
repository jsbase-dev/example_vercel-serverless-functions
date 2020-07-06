const fs = require('fs-extra');
const path = require ('path');
const os = require('os');
const CBOR = require('cbor-sync');

module.exports = function (req, res) {
    fs.readFile(
	path.join(__dirname, '/../store/store.cbor'),
	function (err, buffer) {
		if (err) return console.error(err);

		let data = CBOR.decode(buffer)

		return res.json(JSON.stringify(data));
	}
);
