import * as React from "react";
import Layout from "@/Layouts/Clientes/Layout";

export default function ({dados}) {
    return (
        <Layout>
            <div className="row justify-content-end">
                <div className="col-auto">
                    <a className="btn btn-primary btn-sm" href={route('clientes.pesquisa')}>Voltar</a>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th className="text-center">Código</th>
                        <th>Vendedor</th>
                        <th>Endereço</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {dados.map((item, index) => {
                        return (
                            <tr key={index} className="cursor-pointer"
                                onClick={() => window.location.href = route('clientes.mostrar', item.id)}>
                                <td className="col-1 text-center">{item.codigo}</td>
                                <td>{item.vendedor}</td>
                                <td>{item.endereco}</td>
                                <td>
                                    <a className="btn btn-primary btn-sm px-3 mb-0" href={route('clientes.mostrar', item.id)}>Ver</a>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}
