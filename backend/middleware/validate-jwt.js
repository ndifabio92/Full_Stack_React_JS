const { response, request } = require("express");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const validateJWT = async (req = request, res = response, next) => {
	const token = req.header("x-token");

	if (!token) {
		return res.status(401).json({
			msg: "No hay token en la peticion",
		});
	}

	try {
		const { user } = jwt.verify(token, process.env.SECRET_JWT_SEED);
		console.log( user.id )
		const userExist = await User.findByPk( user.id );

		console.log( userExist )
		if (!userExist) {
			return res.status(401).json({
				msg: "Token no valido - usuario no existe",
			});
		}
		if (!userExist.status) {
			return res.status(401).json({
				msg: "Token no valido - status",
			});
		}

		req.user = userExist;
		next();
	} catch (error) {
		console.error(error);
		res.status(401).json({
			msg: "Token no valido",
			error,
		});
	}
};

module.exports = {
	validateJWT,
};