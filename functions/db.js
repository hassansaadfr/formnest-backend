const mongoose = require("mongoose");
const { reponse } = require("../models/reponse");
require("dotenv").config();

const uri = String(process.env.DB_URI);

const connectToDb = () => {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  return new Promise((resolve, reject) => {
    db.on("open", resolve());
    db.on("error", reject("error connection with db"));
  });
};

module.exports = {
  connectToDb,
};
