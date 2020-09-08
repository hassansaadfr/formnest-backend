const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reponseSchema = new Schema({
  reponse: { required: true, type: String },
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "form",
  },
  question: String,
  type: String,
  questionNumber: String
});

const reponse = mongoose.model("reponse", reponseSchema);

module.exports = { reponse };
