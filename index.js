const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { formRouter, questionRouter, reponseRouter } = require("./routes");
const { connectToDb } = require("./functions/db");
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

connectToDb();

app.use(formRouter);
app.use(questionRouter);
app.use(reponseRouter);

app.all("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
