const fs = require('fs-extra');
const path = require ('path');
const os = require('os');

module.exports = function (req, res) {
    fs.readFile(
	path.join(os.tmpdir(), '/store.json'),
	function (err, data) {
		if (err) return console.error(err);

		let json = JSON.stringify(data);

		return res.json(json);
	}
);
