const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  title: { type: String, required: true },
  color: String,
});

const form = mongoose.model("form", formSchema);

module.exports = { form };
