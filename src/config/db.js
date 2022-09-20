// koneksi ke postgreSQL

// declare library
const pg = require("pg");
const {
  DB_HOSTNAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  PORT,
} = require("../helper/env");
const db = new pg.Pool({
  host: DB_HOSTNAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: PORT,
});

db.connect((err) => {
  if (err) {
    console.log("error connecting to database");
  } else {
    console.log("database connected");
  }
});

module.exports = db;
