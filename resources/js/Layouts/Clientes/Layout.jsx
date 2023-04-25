import * as React from "react";
import {Head} from "@inertiajs/react";

export default function Layout({children, titlePage}) {
    return (
        <div className="justify-content-center bg-primary vh-100 pt-6">
            <Head title={titlePage}/>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="row justify-content-center mb-5">
                            <div className="col-auto">
                                <img src="/storage/crm/imagens/logo.jpeg" className="" width="200" alt="Logo"/>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
