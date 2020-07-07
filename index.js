
const polka = require("polka")
polka().get("/", (req, res) => { res.end("<h1>✌ Hello party people!</h1>") })
.listen(3000, err => { if (err) throw err; console.log("Running on localhost:3000") });
