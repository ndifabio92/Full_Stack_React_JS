const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const User = db.define( 'User', {
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.TINYINT
    }
});

module.exports = User;