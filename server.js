// require is like 'import'
// require no dot.: import from library
const express = require('express')
const app = express()

// with a . : from file path
const demos = require('./controllers/demos-controllers')
demos(app)

//start a server listen to a port
app.listen(3000)