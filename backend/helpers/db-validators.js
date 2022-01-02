const User = require("../models/user");

const emailExist = async (email = "") => {
	const isExist = await User.findOne({ email });
	if (isExist) throw new Error(`El correo ${email}, ya esta registrado`);
};

const existUserId = async ( id ) => {
	const isExist = await User.findByPk( id  );
	if( !isExist ) throw new Error(`El id no existe ${ id }`);
}

module.exports = {
	emailExist,
	existUserId,
}
