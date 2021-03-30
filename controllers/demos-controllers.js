module.exports = (app) => {
    //deal with http
    const add = (request, response) => {
        const a = parseInt(request.params.paramA)
        const b = parseInt(request.params['paramB'])
        response.send(`${a + b}`)

    }

    const subtract = (req, res) => {
        const a = parseInt(req.query['x']); //parse string after ?
        const b = parseInt(req.query.y);
        const c = a - b
        res.send(c + '') //lazy way to cast string
    }

    app.get('/subtract', subtract)

    app.get('/add/:paramA/:paramB', add)
//request: encapsulate everything coming from client, comes from browser
//response:
    app.get('/can/be/anything', function (req, res) {
        res.send('Hello World')
    })

}

