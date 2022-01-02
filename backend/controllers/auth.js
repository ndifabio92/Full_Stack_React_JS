const { response } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');
const { generateJWT } = require('../helpers/generate-jwt');

const login = async ( req, res = response ) => {
    const { email, password } = req.body;

    try {
        // is exist
        const user = await User.findOne({
			where: {
				email,
			},
		});

        if( !user ) {
            return res.status( 400 ).json({
                msg: 'Usuario / Password no son correctos'
            })
        }

        // Status true
        if( !user.status ) {
            return res.status( 400 ).json({
                msg: 'Usuario / Password no son correctos - status'
            })
        }

        // check password
        const validPassword = bcryptjs.compareSync( password, user.password );
        if( !validPassword ){
            return res.status( 400 ).json({
                msg: 'Usuario / Password no son correctos - check password'
            })
        }

        // Generate JWT
        const token = await generateJWT( user );

        res.json({
            token
        })

    } catch (error) {
        console.log( error );
        res.status( 500 ).json({
            msg: 'Hable con el administrador',
            error,
        })
    }
}

module.exports = {
    login
}