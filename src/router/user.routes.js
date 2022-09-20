// declare library
const express = require("express");
const {
  list,
  detail,
  insert,
  update,
  destroy,
} = require("../controller/user.controller");
const { register, login } = require("../controller/auth.controller");

// buat variabel dengan memanggil library express router
const router = express.Router();

const jwtAuth = require("../middleware/jwtAuth");
const { isAdmin, isCustomer } = require("../middleware/authorization");
//0 = Admin
//1 = Customer
router
  .get("/user", jwtAuth, isAdmin, list)
  .get("/user/:id", detail)
  .post("/user", insert)
  .put("/user/:id", update)
  .delete("/user/:id", destroy)
  //register
  .post("/register", register)
  //login
  .post("/login", login);

module.exports = router; // harus di ekspor agar bisa dipanggil di index
