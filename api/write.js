const fs = require('fs-extra');
const path = require('path');
const os = require('os');
// const CBOR = require('cbor-sync');

const data = require(path.join(__dirname, '/../store/data.json'));
// const buffer = CBOR.encode(data);

module.exports = function (req, res) {
    fs.writeFile(path.join(os.tmpdir(), '/store.json'), ${JSON.stringify(data), function (err) {
        if (err) { return console.error(err); }

        console.log(`  ➤  📰 write data: ${JSON.stringify(data)}`);
    });

    return res.json(JSON.stringyfy(data));
};
