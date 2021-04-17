//model: takes in schema, build model

const mongoose = require("mongoose")
const quizzesSchema = require("./quizzes-schema")
const quizzesModel = mongoose.model(
    "QuizzesModel",
    quizzesSchema
)

module.exports = quizzesModel