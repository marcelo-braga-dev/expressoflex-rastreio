import {useEffect, useState} from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import {useForm, usePage} from "@inertiajs/react";
import * as React from "react";

export default function Navbar({titlePage, menuNavbar}) {
    const {post} = useForm();

    function logout() {
        post(route('logout'));
    }

    // MENU PERFIL
    const settings = [
        {title: 'Usuários', url: route('admin.usuarios.index')}
    ];

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function itemMenu(menu) {
        return menu === menuNavbar ? 'btn btn-primary mt-2 mb-0 mx-3 btn-sm px-3' : 'btn btn-link mt-2 mb-0 mx-3 text-primary'
    }

    return (
        <nav className="navbar navbar-main navbar-expand-lg pb-3 bg-primary" data-scroll="false">
            {/*<div className=" mt-2">*/}
                <div className="row row-cols-3 align-items-center w-100 justify-content-around">
                    <div className="col-auto d-none d-md-block  bg-white p-2 rounded">
                        <a href="/">
                        <img src="/storage/crm/imagens/logo.jpeg" className="" width="100" alt="Logo"/>
                        </a>
                    </div>
                    <div className="col-auto">
                        <a className={itemMenu('pacotes')} href={route('admin.pacotes.index')}>
                            Pacotes</a>
                        <a className={itemMenu('sinistros')} href={route('admin.sinistros.index')}>
                            Sinistros
                        </a>
                    </div>
                    <div className="col-auto" id="navbar">
                        <ul className="navbar-nav justify-content-around">

                            <li className="nav-item d-flex align-items-center mx-2">
                                <Box sx={{flexGrow: 0}}>
                                    <Tooltip title="Configurações">
                                        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                            <i style={{fontSize: 16}} className="text-primary fas fa-user-cog"/>
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{mt: '20px'}}
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map(({title, url}, i) => (
                                            <a key={i} href={url}>
                                                <MenuItem onClick={handleCloseUserMenu}>
                                                    {title}
                                                </MenuItem>
                                            </a>
                                        ))}
                                        <div onClick={() => logout()} style={{minWidth: 150}}>
                                            <MenuItem key="Sair" onClick={handleCloseUserMenu}>
                                                Sair
                                            </MenuItem>
                                        </div>
                                    </Menu>
                                </Box>
                            </li>
                        </ul>
                    </div>
                </div>


            {/*</div>*/}
        </nav>
    )
}
