// controller deal with all things HTTP
// between HTTP and JavaScript
// import service
const quizzesService = require('../services/quizzes/quizzes-service')
// take in app, express
module.exports = (app) => {

    // req, res allows participating in client/server architecture
    // client sends a request
    // server fulfills response
    const findAllQuizzes = (req, res) => {
        // const allQuiz = quizzesService.findAllQuizzes()
        // res.send(allQuiz)
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                res.send(quizzes)
            })
    }
    const findQuizById = (req, res) => {
        const quizId = req.params.quizId
        // const findQuiz = quizzesService.findQuizById(quizId)
        // res.send(findQuiz)
        quizzesService.findQuizById(quizId)
            .then((quiz) => {
                // quiz[0]
                res.send(quiz)
            })
    }
    // create GET HTTP endpoints
    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)

}