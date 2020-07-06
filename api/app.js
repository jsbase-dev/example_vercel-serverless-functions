require('dotenv').config()

const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const cbor = require('cbor-sync')

const apiGet = require('./get')

const { PORT, NODE_ENV } = process.env || 5000

const app = express()

app.use(session({
	store: new FileStore,
	secret: 'keyboard cat',
	resave: true,
	saveUninitialized: true,
	fileExtension: '.cbor',
	encoding: null,
	encoder: cbor.encode,
	decoder: cbor.decode
}))

app.get( '/', apiGet )

const server = app.listen(PORT, function () {
	let host = NODE_ENV === 'development' ? 'localhost' : server.address().address
	let port = server.address().port

    console.log(` 🎈 Server running on "${host}:${port}" 🎈 `)
})
