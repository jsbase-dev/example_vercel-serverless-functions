const fs = require('fs-extra');
const path = require('path');
const CBOR = require('cbor-sync');

const storeName = 'data.json';
const storePath = `${__dirname}/../store`;

const data = require(`${storePath}/${storeName}`);

const buffer = CBOR.encode(data);

const store = `${storePath}/store.cbor`;

fs.writeFile(store, buffer, function (err) {
	if (err) return console.error(err);

	console.log(`%c  ➤  📰 file created: ${storePath}/${storeName}`, 'color: #bada55');
});
