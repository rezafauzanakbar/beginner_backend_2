const userModel = require("../model/user.model");
const { success, failed, succesWithToken } = require("../helper/response");

//deklare bcyrpt

const bcyrpt = require("bcrypt");
const jwtToken = require("../helper/generateJWT");

module.exports = {
  register: (req, res) => {
    try {
      //tangkap data dari body
      const {
        id,
        nama_makanan,
        harga,
        stock,
        berat,
        password,
        username,
        level,
      } = req.body;
      bcyrpt.hash(password, 10, (err, hash) => {
        if (err) {
          failed(res, err.message, "failed", "fail hash password");
        }
        //console.log(hash)
        const data = {
          id,
          nama_makanan,
          harga,
          stock,
          berat,
          password: hash,
          username,
          level,
        };
        userModel
          .register(data)
          .then((result) => {
            success(res, result, "success", "register success");
          })
          .catch((err) => {
            failed(res, err.message, "failed", "register failed");
          });
      });
    } catch (err) {
      failed(res, err.message, "failed", "internal server error");
    }
  },

  login: (req, res) => {
    const { username, password } = req.body;
    userModel
      .checkUsername(username)
      .then((result) => {
        // console.log(res.rows[0]);
        const user = result.rows[0];
        if (result.rowCount > 0) {
          bcyrpt
            .compare(password, result.rows[0].password)
            .then(async (result) => {
              if (result) {
                const token = await jwtToken({
                  username: user.username,
                  level: user.level,
                });
                // console.log(token);
                succesWithToken(res, token, "success", "login success");
              } else {
                //ketika password salah
                failed(res, null, "failed", "username atau password salah");
              }
            });
        } else {
          //ketika username salah
          failed(res, null, "failed", "username atau password salah");
        }
      })
      .catch((err) => {
        failed(res, err.message, "failed", "internal server error");
      });
  },
};
