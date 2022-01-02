const express = require('express');
const cors = require('cors');
const db = require('../database/connection');
const authRouter = require('../routes/auth');
const userRouter = require('../routes/user');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.userPath = '/api/user';
        this.authPath = '/api/auth';

        //Conectar a base de datos
        this.dbConnection();

        //Middlewares
        this.middlewares();

        //Routas de mi app
        this.routes();

    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database Online');
        } catch (error) {
            throw new Error( error );
        }
    }
    
    middlewares() {
        //CORS
        this.app.use( cors() );
        //Read body
        this.app.use( express.json() );
        //Folder Public
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.authPath, authRouter );
        this.app.use( this.userPath, userRouter  );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${ this.port }`);
        });
    }
}

module.exports = Server;