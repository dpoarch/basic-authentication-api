const dotenv = require("dotenv");
const mysql = require("mysql");
dotenv.config();


const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD
});

connection.connect();

module.exports = connection;