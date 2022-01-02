const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const User = require("../models/user");

const getUsers = async (req, res = response) => {
	const users = await User.findAll();

	res.json(users);
};

const getUser = async (req, res = response) => {
	const { id } = req.params;
	const user = await User.findByPk(id);

	user
		? res.json(user)
		: res.status(404).json({
				msg: `No exite el usuario con el id ${id}`,
		  });
};

const postUser = async (req, res = response) => {
	const { email, password } = req.body;
	try {
		const user = new User({ email, password });
		const isExistUser = await User.findOne({
			where: {
				email,
			},
		});
		if (isExistUser)
			return res.status(400).json({
				msg: "Ya existe un usuario",
			});

		// encrypt password
		const salt = bcryptjs.genSaltSync();
		user.password = bcryptjs.hashSync( password, salt );

		await user.save();

		res.json( user );

	} catch (error) {
		res.status(500).json({
			msg: "Hable con el administrador",
		});
	}
};

const putUser = async (req, res = response) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const userUpdate = await User.findByPk(id);

		if (!userUpdate)
			return res.status(404).json({
				msg: "No existe el usuario para modificar ",
			});

		await userUpdate.update(body);
	} catch (error) {
		res.status(500).json({
			msg: "Hable con el administrador",
		});
	}

	res.json({
		msg: "putUsuers",
		id,
		body,
	});
};

const delUser = async (req, res = response) => {
	const { id } = req.params;
	const userDel = await User.findByPk(id);

	await userDel?.update({ status: false });

	res.json({
		msg: "deleteUser",
		id,
	});
};

module.exports = {
	getUsers,
	getUser,
	postUser,
	putUser,
	delUser,
};
