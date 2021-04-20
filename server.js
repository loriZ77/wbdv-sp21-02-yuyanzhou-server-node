// require is like 'import'
// require no dot.: import from library
const express = require('express')
const app = express()


const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://zhou77:assignment8@cluster0.cvd5e.mongodb.net/whiteboard?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// with a . : from file path
const demos = require('./controllers/demos-controllers')
demos(app)

const quizzesController = require('./controllers/quizzes-controller')
quizzesController(app)

const questionsController = require('./controllers/questions-controller')
questionsController(app)

require('./controllers/quiz-attempts-controller')(app)

//start a server listen to a port
app.listen(process.env.MONGODB_URL)