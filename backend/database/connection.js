const { Sequelize } = require('sequelize');

const db = new Sequelize('FullStackReact', 'root', 'root1942', {
	host: 'localhost',
	dialect: 'mysql',
	// logging: false,
});

module.exports = db;
