const mysql = require("mysql2");

//const db = mysql.createConnection({
//  host: "localhost",
// user: "root",
// password: "",
// database: "smart_it_equipment_advisor",
//});

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed");
    console.log(err);
    return;
  }

  console.log("Connected to MySQL Database");
});

module.exports = db;
