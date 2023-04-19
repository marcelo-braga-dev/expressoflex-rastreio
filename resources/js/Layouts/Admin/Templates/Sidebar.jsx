import * as React from "react";

export default function Sidebar({menuSidebar, submenuSidebar}) {

    const pages = [{
        'menu': 'Menu',
        'tag': 'menu',
        'icone': 'fas fa-angle-double-right',
        'submenu': [{
            'menu': 'Registros',
            'url': route('admin.home'),
            'tag': 'submenu'
        }],
    }, {
        'menu': 'Pacotes',
        'tag': 'pacotes',
        'icone': 'fas fa-angle-double-right',
        'submenu': [{
            'menu': 'Cadastrados',
            'url': route('admin.pacotes.index'),
            'tag': 'cadastrados'
        }, {
            'menu': 'Cadastrar',
            'url': route('admin.pacotes.create'),
            'tag': 'cadastrar'
        }
        ],
    },
    ];

    return (
        <aside id="sidenav-main"
               className="sidenav bg-white navbar navbar-vertical navbar-expand-xs fixed-start">
            <div style={{"backgroundColor": "#252525"}}>
                <a href="/">
                    <div className="text-center py-3">
                        <img src="/storage/crm/imagens/logo.png" className="" width="100" alt="Logo"/>
                    </div>
                </a>
            </div>
            <div className="horizontal px-1 mt-3">
                <div className="accordion accordion-flush w-auto mb-6" id="accordionFlushSidebar">

                    {/*ITEMS*/}
                    {pages.map(({menu, icone, submenu, tag}, index) => (
                        <div key={index} className="accordion-item text-dark navbar-nav border-bottom py-1">
                            <div className="accordion-header nav-item" id={"flush-heading-" + index}>
                                <div
                                    className={(tag === menuSidebar ? '' : 'collapsed ') + "accordion-button nav-link p-1 m-0"}
                                    data-bs-toggle="collapse"
                                    data-bs-target={"#flush-collapse-" + index} aria-expanded="false"
                                    aria-controls={"flush-collapse-" + index}>
                                    <div
                                        className="icon icon-sm border-radius-md d-flex align-items-center">
                                        <i className={icone + " text-dark text-sm opacity-10"}></i>
                                    </div>
                                    <span className="ms-2 font-weight-bold">{menu}</span>
                                </div>
                            </div>

                            <div id={"flush-collapse-" + index}
                                 className={(tag === menuSidebar ? 'show ' : 'x') + "accordion-collapse nav-item collapse"}
                                 aria-labelledby={"flush-heading-" + index}
                                 data-bs-parent="#accordionFlushSidebar">

                                {submenu.map(({menu, url, tag}, i) => (
                                    <a href={url} key={i} className="text-sm text-muted">
                                        <div className="accordion-body p-0 ms-5 mb-2">
                                                <span className="nav-link-text"
                                                      style={tag === submenuSidebar ? {
                                                          color: 'black',
                                                          fontWeight: 600
                                                      } : {}}>
                                                    {menu}
                                                </span>
                                        </div>
                                    </a>))}
                            </div>
                        </div>))}
                    {/*ITEMS - FIM*/}
                </div>
            </div>
        </aside>)
}
