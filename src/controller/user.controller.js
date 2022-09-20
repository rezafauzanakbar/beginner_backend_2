const userModel = require("../model/user.model");
const { success, failed } = require("../helper/response");
const userController = {
  // method
  list: (req, res) => {
    // method untuk input data
    userModel
      .selectAll()
      .then((results) => {
        success(res, results, "success", "get all user success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "get all user failed");
      });
  },

  detail: (req, res) => {
    // method untuk menampilkan hanya satu id
    const id = req.params.id;
    userModel
      .selectDetail(id)
      .then((results) => {
        res.json(results.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  insert: (req, res) => {
    // method untuk input
    const { id, nama_makanan, harga, stock, berat } = req.body;
    userModel
      .store(id, nama_makanan, harga, stock, berat)
      .then(() => {
        success(res, null, "success", "insert user success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "insert user failed");
      });
  },

  update: (req, res) => {
    const { nama_makanan, harga, stock, berat } = req.body;
    const id = req.params.id;
    userModel
      .update(id, nama_makanan, harga, stock, berat)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  destroy: (req, res) => {
    // method untuk menghapus
    const id = req.params.id;
    userModel
      .removeById(id)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

module.exports = userController;
