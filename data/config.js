const mysql = require("mysql");

// Set database connection credentials
const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "moviles_tj",
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;
