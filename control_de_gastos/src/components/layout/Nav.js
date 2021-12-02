import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { AccCircleIcon } from '../utils/Icons';

export const Nav = () => {
    const [ anchorEl, setAnchorEl ] = useState( null );
    const openManagement = ( anchorEl?.id === "management-button" ) && Boolean( anchorEl );
    const open = ( anchorEl?.id === "basic-button" ) && Boolean( anchorEl );


    const handleClick = ( event ) => setAnchorEl( event.currentTarget );

    const handleClose = () => setAnchorEl( null );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar>
                    <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Control de Gastos</Link>
                    </Typography>
                    
                    <Button
                        color="inherit"
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={ open ? 'true' : undefined }
                        onClick={ handleClick }
                    >
                        Pestañas
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={ anchorEl }
                        open={ open }
                        onClose={ handleClose }
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={ handleClose } component={ Link } to={'/services'}> Servicios </MenuItem>
                        <MenuItem onClick={ handleClose } component={ Link } to={'/creditcards'}> Tarjetas de Creditos </MenuItem>
                        <MenuItem onClick={ handleClose } component={ Link } to={'/totalcost'}> Gasto Total </MenuItem>
                    </Menu>
                    
                    <Button
                        color="inherit"
                        id="management-button"
                        aria-controls="management-menu"
                        aria-haspopup="true"
                        aria-expanded={ openManagement ? 'true' : undefined }
                        onClick={ handleClick }
                    >
                        Administracion
                    </Button>
                    <Menu
                        id="management-menu"
                        anchorEl={ anchorEl }
                        open={ openManagement }
                        onClose={ handleClose }
                        MenuListProps={{
                            'aria-labelledby': 'management-button',
                        }}
                    >
                        <MenuItem onClick={ handleClose } component={ Link } to={'/services/crud'}> Agregar Servicio </MenuItem>
                        <MenuItem onClick={ handleClose } component={ Link } to={'/creditcards/crud'}> Agregar Tarjeta de Credito </MenuItem>
                    </Menu>

                    <Button component={ Link } to={'/'} color="inherit"> <AccCircleIcon /> Login </Button>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
