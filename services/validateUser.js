const jwt = require("jsonwebtoken");

module.exports = {
	validateRegister: (req, res, next) => {
		//username min length 3
		if(!req.body.username || req.body.username.length < 3){
			return res.status(400).send({
				message: "Please enter a username with min. 3 characters",
			});
		}
		//password min 6 chars
		if(!req.body.password || req.body.password.length < 6){
			return res.status(400).send({
				message: "Please enter a password with min. 6 characters"
			});
		}
		//password (repeat) must match
		if(!req.body.confirm_password || req.body.password !=  req.body.confirm_password){
			return res.status(400).send({
				message: "Both passwords must match",
			});
		}
		next();
	}
};