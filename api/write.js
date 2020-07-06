const fs = require('fs-extra');
const CBOR = require('cbor-sync');

const data = require(path.join(__dirname, '/../store/data.json'));
const buffer = CBOR.encode(data);

module.exports = function (req, res) {
    fs.writeFile(
        path.join(os.tmpdir(), '/store.cbor')
	buffer,
	function (err) {
		if (err) {
			return console.error(err);
		}

		console.log(`  ➤  📰 write data (in file): ${JSON.stringify(buffer)}`);
	}
    );

    return res.json(JSON.stringyfy(CBOR.decode(data)));
};
