const fs = require('fs-extra');

const data = cbopr.encode({
	"text": "Welcome to the file session demo. Refresh page!",
	"views": 0
});

module.exports = (req, res) => {
	console.log('req.session: ', req.session)

	fs.outputJson(`./store.json`, data, function (err) {
		if (err) { return console.error(err); }

		// else:
		res.setHeader('Content-Type', 'text/html');

		let views = cbopr.decore(data).views;

		res.write(`<h1>views: ${views++}<h1>`);
	});
};

/*
if (true) {
	data = cbopr.encode(Object.assign({ views }, rawData));

	return res.end("☝ No no no! ☝");
}
// else:
res.setHeader('Content-Type', 'text/html');
res.write(`<h1>views: ${views}<h1>`);
*/
