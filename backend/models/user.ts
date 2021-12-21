import { DataTypes } from 'sequelize';
import db from '../database/connection';

const User = db.define( 'User', {
    name: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.TINYINT,
    }
});


export default User;