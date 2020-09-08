const express = require("express");
const {
  getAllReponses,
  getReponseById,
  createReponse,
  updateReponse,
  deleteReponse,
} = require("../functions/reponse");
const router = express.Router();

// should return reponse by id
router.get("/reponse/:id", async (req, res) => {
  try {
    const response = await getReponseById(req.params.id);
    res.send(response);
  } catch (error) {
    res.sendStatus(500);
  }
});

// should return all reponse
router.get("/reponses", async (req, res) => {
  try {
    const responses = await getAllReponses();
    res.json(responses);
  } catch (e) {
    res.sendStatus(500);
  }
});

// should update reponse
router.put("/reponse/:id", async (req, res) => {
  try {
    await updateReponse(req.params.id, req.body);
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
});

// should create a reponse
router.post("/reponse", async (req, res) => {
  try {
    await createReponse(req.body);
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
});

// should delete reponse
router.delete("/reponse/:id", async (req, res) => {
  try {
    await deleteReponse(req.params.id);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
