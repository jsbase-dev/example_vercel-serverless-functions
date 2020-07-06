const fs = require('fs-extra');
const path = require ('path');
const os = require('os');
const CBOR = require('cbor-sync');

let data;

    fs.readFileSync(
	path.join(__dirname, '/../store/store.cbor'),
	function (err, buffer) {
		if (err) return console.error(err);

		data = CBOR.decode(buffer);
	});

module.exports = function (req, res) {
    return res.json(JSON.stringify(data));
};
