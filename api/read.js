const fs = require('fs-extra');
const CBOR = require('cbor-sync');

fs.readFileSync('store.json', function (err, data) {
	if (err) {
	   return console.error(err);
	}

	//else:
	console.log("Asynchronous read: " + data.toString());
 });
