const express = require("express");
const {
  getAllForms,
  getFormById,
  createForm,
  updateForm,
  deleteForm,
} = require("../functions/form");
const router = express.Router();

// should return form by id
router.get("/form/:id", async (req, res) => {
  try {
    const form = await getFormById(req.params.id);
    res.send(form);
  } catch (e) {
    res.sendStatus(500);
  }
});

// should return all forms
router.get("/forms", async (req, res) => {
  try {
    const form = await getAllForms(req.params.id);
    res.send(form);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// should create form
router.post("/form", async (req, res) => {
  try {
    const form = await createForm(req.body);
    console.log(form);
    res.send({ id: form._id }).status(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// should update form
router.put("/form/:id", async (req, res) => {
  try {
    await updateForm(req.params.id, req.body);
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
});

// should delete form
router.delete("/form/:id", async (req, res) => {
  try {
    await deleteForm(req.params.id);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
