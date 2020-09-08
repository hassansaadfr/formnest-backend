const { form } = require("../../models/form");

const createForm = async (formData) => {
  try {
    const userForm = new form(formData);
    return new Promise((resolve, reject) => {
      userForm.save((err, element) => {
        if (err) reject(err);
        resolve(element);
      });
    });
  } catch (error) {
    return error;
  }
};

const getAllForms = async () => {
  try {
    return new Promise((resolve, reject) => {
      form.find().exec((err, response) => {
        if (err) {
          reject(err);
        }
        console.log(response);
        if (!err) resolve(response);
      });
    });
  } catch (error) {
    return error;
  }
};

const getFormById = async (id) => {
  try {
    return new Promise((resolve, reject) => {
      form.findById(id, (err, res) => {
        if (err) {
          reject(err);
        }
        if (!err) resolve(res);
      });
    });
  } catch (error) {
    return error;
  }
};

const deleteForm = async (id) => {
  try {
    return new Promise((resolve, reject) => {
      form.deleteOne({ _id: id }, (err) => {
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

const updateForm = async (id, data) => {
  try {
    return new Promise((resolve, reject) => {
      form.updateOne({ _id: id }, data, (err) => {
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
  createForm,
  getAllForms,
  getFormById,
  updateForm,
  deleteForm,
};
