import { Sequelize } from 'sequelize';

const db = new Sequelize('FullStackReact', 'root', 'root1942', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false,
});

export default db;