const express = require("express");
const route = express.Router();
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");


const conn = require("../conf/db.js");
const service = require("../services/validateUser.js");



// http://localhost:3000/api/authenticate
route.post("/authenticate", (req, res, next) => {
	conn.query(`SELECT * FROM users WHERE username = ${conn.escape(req.body.username)};`, (err, result) => {
		if(err){
			throw err;
			return res.status(400).send({
				message: err,
			});
		}
		if(!result.length){
			return res.status(400).send({
				message: "Wrong username or password"
			});
		}

		bcrypt.compare(req.body.password, result[0]['password'], (bErr, bResult) => {
			if(bErr){
				throw bErr;
				return res.status(400).send({
					message: "Wrong username or password"
				});
			}
			if(bResult){ //password match
				const token = jwt.sign({
					username: result[0].username,
					userId: result[0].id
				}, "SECRETKEY", {expiresIn: "1d"});
				conn.query(`UPDATE users SET isActive = 1, last_login = now() WHERE id = ${result[0].id};`);
				return res.status(200).send({
					message: "success",
					token,
					user: result[0]
				});
			}
			return res.status(401).send({
				message: "Wrong username or password"
			});
		});
	});
});

// http://localhost:3000/api/welcome
route.get("/welcome", (req, res, next) => {
	res.status(200).send('Welcome response...');
});

module.exports = route;