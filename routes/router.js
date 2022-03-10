const express = require("express");
const route = express.Router();
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");


const conn = require("../conf/db.js");
const service = require("../services/validateUser.js");



// http://localhost:3000/api/authenticate
route.post("/authenticate", (req, res, next) => {

	// get users data
	conn.query(`SELECT * FROM users WHERE username = ${conn.escape(req.body.username)};`, (err, result) => {

		// return 400 if query has encountered error
		if(err){
			throw err;
			return res.status(400).send({
				message: err,
			});
		}

		// return code 400 if username not match
		if(!result.length){
			return res.status(400).send({
				message: "Wrong username or password"
			});
		}

		// check if both password match
		bcrypt.compare(req.body.password, result[0]['password'], (bErr, bResult) => {
			if(bErr){
				throw bErr;
				return res.status(400).send({
					message: "Wrong username or password"
				});
			}
			// this will return result of code 200 if password matches
			if(bResult){ 
				const token = jwt.sign({
					username: result[0].username,
					userId: result[0].id
				}, "SECRETKEY", {expiresIn: "1d"});
				
				// Update time since user should already be logged in
				conn.query(`UPDATE users SET isActive = 1, last_login = now() WHERE id = ${result[0].id};`);

				// return userdata with code 200 & auth token
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
route.get("/welcome", service.validateToken, (req, res, next) => {
	res.status(200).send('Welcome response...');
});

module.exports = route;