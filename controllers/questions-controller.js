const questionsService = require('../services/questions/questions-service')

module.exports = (app) => {
    // /api/questions
    const findAllQuestions = (req, res) => {
        // const questions = questionsService.findAllQuestions();
        // res.send(questions)

        // return promise
        questionsService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }

    // /api/quizzes/:qzid/questions
    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.qzid;
        // const questions = questionsService.findQuestionsForQuiz(quizId)
        // res.send(questions)
        questionsService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionById = (req, res) => {

    }

    app.get('/api/questions', findAllQuestions)
    app.get('/api/quizzes/:qzid/questions', findQuestionsForQuiz)
}