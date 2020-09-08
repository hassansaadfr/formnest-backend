const { question } = require("../../models/questions");

const createQuestion = async (questionData) => {
  try {
    return new Promise((resolve, reject) => {
      const userQuestion = new question(questionData);
      userQuestion.save((err) => {
        if (err) reject(err);
        resolve();
      });
    });
  } catch (error) {
    return error;
  }
};

const getAllQuestions = async () => {
  try {
    return new Promise((resolve, reject) => {
      question.find().exec((err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  } catch (error) {
    return error;
  }
};

const getQuestionById = async (id) => {
  try {
    return new Promise((resolve, reject) => {
      question.findById(id, (err, response) => {
        if (err) {
          reject(err);
        }
        if (!err) resolve(response);
      });
    });
  } catch (error) {
    return error;
  }
};

const deleteQuestion = async (id) => {
  try {
    return new Promise((resolve, reject) => {
      question.deleteOne({ _id: id }, (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  } catch (error) {
    return error;
  }
};

const updateQuestion = async (id, data) => {
  try {
    return new Promise((resolve, reject) => {
      question.updateOne({ _id: id }, data, (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  deleteQuestion,
  updateQuestion,
};
