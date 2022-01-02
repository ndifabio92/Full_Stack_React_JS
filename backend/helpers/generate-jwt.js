const jwt = require('jsonwebtoken');

const generateJWT = ( user = '' ) => {
    return new Promise(( resolve, reject ) => {
        const payload = {user};
        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '10h'
        }, ( err, token ) => {
            if( err ) {
                console.log( err );
                reject('No se pudo generar el token');
            } else {
                resolve( token );
            }
        })
    })
}

module.exports = {
    generateJWT,
}