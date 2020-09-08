const express = require("express");
const {
  getQuestionById,
  createQuestion,
  getAllQuestions,
  deleteQuestion,
  updateQuestion,
} = require("../functions/questions");
const router = express.Router();

// should return question by id
router.get("/question/:id", async (req, res) => {
  try {
    const question = await getQuestionById(req.params.id);
    res.send(question);
  } catch (error) {
    res.sendStatus(500);
  }
});

// should return all questions
router.get("/questions", async (req, res) => {
  try {
    const questions = await getAllQuestions();
    res.json(questions);
  } catch (e) {
    res.sendStatus(500);
  }
});

// should update question
router.put("/question/:id", async (req, res) => {
  try {
    await updateQuestion(req.params.id, req.body);
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
});

// should create a question
router.post("/question", async (req, res) => {
  try {
    await createQuestion(req.body);
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// should delete question
router.delete("/question/:id", async (req, res) => {
  try {
    await deleteQuestion(req.params.id);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
