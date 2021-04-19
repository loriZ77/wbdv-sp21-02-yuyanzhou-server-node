const questions = require('./questions.json')

//const questionsModel = require("../../models/questions/questions-model")
const questionsDao = require('../../daos/questions-dao')

const findAllQuestions = () => {
    // return questions // return an array

    return questionsDao.findAllQuestions() //return promise
}
const findQuestionsForQuiz = (qzid) =>
    // return questions.filter((question) => {
    //     return question.quizId === qzid;
    // })
    questionsDao.findQuestionsForQuiz(qzid)


const findQuestionById = (quid) => {
    // return questions.find((question) => {
    //     return question._id === quid;
    // })
    return questionsDao.findQuestionById(quid)
}

// const createQuestion = () => {}
// const createQuestionForQuiz = () => {}
// const updateQuestion = () => {}
// const deleteQuestion = () => {}

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById,
    // createQuestion, createQuestionForQuiz,
    // updateQuestion, deleteQuestion

}