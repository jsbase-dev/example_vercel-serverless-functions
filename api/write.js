const fs = require('fs-extra');
const path = require('path');
const os = require('os');
// const CBOR = require('cbor-sync');

const data = require(path.join(__dirname, '/../store/data.json'));
// const buffer = CBOR.encode(data);

module.exports = function get(req, res) {
    let jsonStr = JSON.stringify(data);

    fs.writeFileSync(path.join(os.tmpdir(), '/store.json'), jsonStr, function (err) {
        if (err) { return res.end(err); }
    });

    return res.json(JSON.stringify(data))
};
