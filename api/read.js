const fs = require('fs-extra');
const CBOR = require('cbor-sync');

fs.readFile(
	`${__dirname}/../store/store.cbor`,
	function (err, buffer) {
		if (err) return console.error(err);

		let data = CBOR.decode(buffer)

		console.log(`  ➤  📰 read data: ${JSON.stringify(data)}`);
	}
);
