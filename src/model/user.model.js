const db = require("../config/db");

const userModel = {
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM food", (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  // router details
  selectDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM food WHERE id=${id}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  // router insert
  store: (id, nama_makanan, harga, stock, berat) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
        INSERT INTO food (id, nama_makanan, harga, stock, berat)
        VALUES
        (${id}, '${nama_makanan}', ${harga}, ${stock}, ${berat})`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  //router hapus
  removeById: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM food WHERE id=${id}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  //router update
  update: (id, nama_makanan, harga, stock, berat) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE food SET nama_makanan = '${nama_makanan}', harga = ${harga}, stock = ${stock}, berat = ${berat} WHERE id = ${id}`,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  register: ({
    id,
    nama_makanan,
    harga,
    stock,
    berat,
    password,
    username,
    level,
  }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO food (id, nama_makanan, harga, stock, berat, password, username, level) VALUES (${id}, '${nama_makanan}', ${harga}, ${stock}, ${berat}, '${password}', '${username}', ${level})`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  //model login
  checkUsername: (username) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM food WHERE username = '${username}'`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
};

module.exports = userModel;
