const https = require('https')

const options = {
	hostname: 'encrypted.google.com',
	port: 443,
	path: '/',
	method: 'GET'
}

const req = https.request(options, (req, res) => {
	console.log('statusCode:', res.statusCode)
	console.log('headers:', res.headers)

	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end('Hello, World!\n')

	res.on('data', (d) => {
		process.stdout.write(d)
	})
})

req.on('error', (e) => {
	console.error(e);
});

req.end()
