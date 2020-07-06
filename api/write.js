const fs = require('fs-extra');
const CBOR = require('cbor-sync');

const data = require(`${__dirname}/../store/data.json`);
const buffer = CBOR.encode(data);

fs.writeFile(
	`${__dirname}/../store/store.cbor`,
	buffer,
	function (err) {
		if (err) {
			return console.error(err);
		}

		console.log(`  ➤  📰 write data (in file): ${JSON.stringify(buffer)}`);
	}
);
