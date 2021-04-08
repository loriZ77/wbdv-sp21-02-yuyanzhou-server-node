const questions = require('./questions.json')

const findAllQuestions = () => {
    return questions
}
const findQuestionsForQuiz = (qzid) => {
    return questions.filter((question) => {
        return question.quizId === qzid;
    })
}

const findQuestionById = (quid) => {
    return questions.find((question) => {
        return question._id === quid;
    })
}

const createQuestion = () => {}
const createQuestionForQuiz = () => {}
const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById,
    createQuestion, createQuestionForQuiz,
    updateQuestion, deleteQuestion

}