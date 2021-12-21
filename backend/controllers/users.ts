import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async ( req: Request, res: Response ) => {
    const users = await User.findAll();

    res.json( users );
}

export const getUser = async ( req: Request, res: Response ) => {

    const { id } = req.params;
    const user = await User.findByPk( id );

    ( user ) ? res.json( user ) : res.status(404).json({
        msg: `No exite el usuario con el id ${ id }`
    });
    
}

export const postUser = async ( req: Request, res: Response ) => {

    const { body } = req;

    try {
        
        const user = new User( body );
        const isExistUser = await User.findOne({
            where: {
                name: body.name
            }
        });

        if( isExistUser ) return res.status( 400 ).json({
            msg: 'Ya existe un usuario'
        });

        await user.save();

    } catch (error) {
        res.status( 500 ).json({
            msg: 'Hable con el administrador',
        })
    };

    res.json({
        msg: 'postUsuers',
        body,
    });
}

export const putUser = async ( req: Request, res: Response ) => {

    const { id } = req.params;
    const { body } = req;
    try {

        const userUpdate = await User.findByPk( id );

        if( !userUpdate ) return res.status( 404 ).json({
            msg: 'No existe el usuario para modificar '
        });

        await userUpdate.update( body );

    } catch (error) {
        res.status( 500 ).json({
            msg: 'Hable con el administrador',
        })
    };

    res.json({
        msg: 'putUsuers',
        id,
        body,
    });
}

export const delUser = async ( req: Request, res: Response ) => {

    const { id } = req.params;
    const userDel = await User.findByPk( id );

    await userDel?.update({ status: false });
    
    res.json({
        msg: 'deleteUser',
        id,
    })
}
