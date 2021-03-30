// require is like 'import'
const express = require('express')
const app = express()

const add = (request, response) => {
    const a = parseInt(request.params.paramA)
    const b = parseInt(request.params['paramB'])
    response.send(`${a + b}`)

}

app.get('/add/:paramA/:paramB', add)
//request: encapsulate everything coming from client, comes from browser
//response:
app.get('/can/be/anything', function (req, res) {
    res.send('Hello World')
})

//start a server listen to a port
app.listen(3000)