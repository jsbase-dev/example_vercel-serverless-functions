const fs = require('fs-extra');
const path = require ('path');
const os = require('os');

module.exports = function (req, res) {
    const json = {};

    fs.readFileSync(
	path.join(os.tmpdir(), '/store.json'),
	function (err, data) {
            if (err) return console.error(err);

	    json = Object.assign(JSON.stringify(data), json);
	});

    return res.json(json);
};
