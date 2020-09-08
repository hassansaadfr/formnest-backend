const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  type: String,
  question: { type: String },
  questionNumber: { required: true, type: String },
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "form",
    required: true,
  },
});

const question = mongoose.model("question", questionSchema);

module.exports = { question };
