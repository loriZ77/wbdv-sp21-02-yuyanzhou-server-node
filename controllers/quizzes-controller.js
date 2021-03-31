//controller is used to deal with HTTP stuff
// import service
const quizzesService = require('../services/quizzes-service')
// take in app, express
module.exports = (app) => {

    const findAllQuizzes = (req, res) => {
        const allQuiz = quizzesService.findAllQuizzes()
        res.send(allQuiz)
    }
    const findQuizById = (req, res) => {
        const quizId = req.params.quizId
        const findQuiz = quizzesService.findQuizById(quizId)
        res.send(findQuiz)
    }
    // create GET HTTP endpoints
    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)

}