import {Head} from '@inertiajs/react';

import ModalsAllerts from "@/Components/Modals/AlertsModals";
import Sidebar from "./Templates/Sidebar";
import Navbar from "./Templates/Navbar";

export default function Layout({children, titlePage, container, voltar, menu, submenu}) {
    ModalsAllerts()
    return (
        <>
            <Head><title>{titlePage}</title></Head>
            <Sidebar menuSidebar={menu} submenuSidebar={submenu}/>

            <main className="main-content">
                <Navbar titlePage={titlePage}/>
                <div className="container-fluid mb-8 mt-3">
                    {container ?
                        voltar ?
                            <div className="card">
                                <div className="card-header border-bottom py-3">
                                    <div className="row">
                                        <div className="col"><span className="font-weight-bold">{titlePage}</span></div>
                                        <div className="col-auto">
                                            <a className="btn btn-link text-dark btn-sm p-0 m-0" href={voltar}>
                                                <i className="fas fa-arrow-left me-1"></i> Voltar
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    {children}
                                </div>
                            </div>
                            :
                            <div className="card">
                                <div className="card-header border-bottom py-3"><span>{titlePage}</span></div>
                                <div className="card-body">
                                    {children}
                                </div>
                            </div>
                        :
                        {children}
                    }
                </div>
            </main>
        </>
    );
}
