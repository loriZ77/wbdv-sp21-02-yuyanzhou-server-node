const quizzes = require('./quizzes.json')

const quizzesModel = require("../../models/quizzes/quizzes-model")

const findAllQuizzes = () => {
    return quizzesModel.find()
    //return quizzes
}

const findQuizById = (quizId) => {
    // return object
    // return quizzes.find((quiz) => {
    //     return quiz._id === quizId
    // })

    // HERE: return a promise
    // find ALWAYS return an Array
    // return quizzesModel.find({_id: quizId})
    // we know it is unique now
    return quizzesModel
        .findById(quizId)
        .populate("questions")
        .exec()
}
//console.log(findAllQuizzes())
//console.log(findQuizById('123'))


//TODO: MongoDB next week
const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}

// export functions for controller
module.exports= {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    deleteQuiz
}