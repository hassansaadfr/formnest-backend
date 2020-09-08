const { reponse } = require("../../models/reponse");

const createReponse = async (reponseData) => {
  try {
    return new Promise((resolve, reject) => {
      const userReponse = new reponse(reponseData);
      userReponse.save((err) => {
        if (err) reject(err);
        resolve();
      });
    });
  } catch (error) {
    return error;
  }
};

const getAllReponses = async () => {
  try {
    return new Promise((resolve, reject) => {
      reponse.find().exec((err, response) => {
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

const getReponseById = async (id) => {
  try {
    return new Promise((resolve, reject) => {
      reponse.findById(id, (err, response) => {
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

const deleteReponse = async (id) => {
  try {
    return new Promise((resolve, reject) => {
      reponse.deleteOne({ _id: id }, (err) => {
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

const updateReponse = async (id, data) => {
  try {
    return new Promise((resolve, reject) => {
      reponse.updateOne({ _id: id }, data, (err) => {
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
  createReponse,
  updateReponse,
  deleteReponse,
  getAllReponses,
  getReponseById,
};
