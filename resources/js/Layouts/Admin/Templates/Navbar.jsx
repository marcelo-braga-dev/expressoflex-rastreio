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
        // {title: 'Perfil', url: route('admin.home', 0)}
    ];

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function itemMenu(menu) {
        return menu === menuNavbar ? 'mx-3 font-weight-bold text-decoration-underline' : 'mx-3'
    }

    return (
        <nav className="navbar navbar-main navbar-expand-lg pb-3 bg-primary" data-scroll="false">
            <div className="container-fluid mt-2">
                <div className=" bg-white p-2 rounded">
                    <img src="/storage/crm/imagens/logo.jpeg" className="" width="100" alt="Logo"/>
                </div>

                {/*<nav aria-label="breadcrumb">*/}
                {/*    <h6 className="font-weight-bolder text-primary mb-0">{titlePage}</h6>*/}
                {/*</nav>*/}
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                    <div className="ms-md-auto">
                        <a className={itemMenu('pacotes')} href={route('admin.pacotes.index')}>
                            Pacotes</a>
                        <a className={itemMenu('sinistros')} href={route('admin.sinistros.index')}>
                            Sinistros
                        </a>
                    </div>
                    <ul className="navbar-nav justify-content-around">

                        {/*HamburguemMenu*/}
                        <li className="nav-item d-xl-none mx-2 d-flex align-items-center">
                            <div className="nav-link text-white p-0" id="iconNavbarSidenav">
                                <div className="sidenav-toggler-inner">
                                    <i className="sidenav-toggler-line bg-white"></i>
                                    <i className="sidenav-toggler-line bg-white"></i>
                                    <i className="sidenav-toggler-line bg-white"></i>
                                </div>
                            </div>
                        </li>

                        {/*ChatInterno*/}
                        <li className="nav-item dropdown mx-3 d-flex align-items-center">

                        </li>

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
        </nav>
    )
}
