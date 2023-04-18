import {useEffect, useState} from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import {useForm, usePage} from "@inertiajs/react";

export default function Navbar({titlePage}) {
    const {post} = useForm();

    function logout() {
        post(route('logout'));
    }

    // MENU PERFIL
    const settings = [
        {title: 'Perfil', url: route('admin.home', 0)}
    ];

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <nav className="navbar navbar-main navbar-expand-lg pb-3"
             data-scroll="false" style={{"backgroundColor": "#252525"}}>
            <div className="container-fluid py-1 mt-2">
                <nav aria-label="breadcrumb">
                    <h6 className="font-weight-bolder text-white mb-0">{titlePage}</h6>
                </nav>
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                    <div className="ms-md-auto pe-md-3 d-flex align-items-center"></div>
                    <ul className="navbar-nav  justify-content-end">

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
                        {/*<li className="nav-item dropdown mx-3 d-flex align-items-center">*/}
                        {/*</li>*/}

                        <li className="nav-item d-flex align-items-center mx-2">
                            <Box sx={{flexGrow: 0}}>
                                <Tooltip title="Configurações">
                                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                        <i style={{fontSize: 16}} className="text-white fas fa-user-cog"/>
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
