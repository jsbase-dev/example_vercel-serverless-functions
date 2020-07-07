const fs = require('fs-extra') // https://github.com/jprichardson/node-fs-extra#methods
const path = require('path')

const serverJs = path.join(`const polka = require("polka");
	polka().get("/", (req, res) => {
		res.end("<h1>✌ Hello party people!</h1>")
	})
	.listen(3000, err => { if (err) throw err; console.log("Running on localhost:3000") });`
)

const pathServer = path.join(__dirname, '/../index.js')

fs.outputFileSync(pathServer, `module.exports = '${serverJs}'`)

console.log(` ☘️   Server createt at "${pathServer}"`)
