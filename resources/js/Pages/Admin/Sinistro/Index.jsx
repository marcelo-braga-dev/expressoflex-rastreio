import Layout from "@/Layouts/Admin/Layout";

export default function ({sinistros}) {
    return (
        <Layout container titlePage="Sinistros" menu="sinistros">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Data</th>
                        <th className="text-center">Código</th>
                        <th>Motoboy</th>
                        <th>Vendedor</th>
                        <th>Status</th>
                        <th>Reembolso</th>
                        <th>Anotações</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {sinistros.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="col-1">{item.data}</td>
                                <td className="col-1 text-center">{item.codigo}</td>
                                <td className="text-wrap font-weight-bold">{item.motoboy}</td>
                                <td>{item.vendedor}</td>
                                <td>{item.status}</td>
                                <td>R$ {item.reembolso}</td>
                                <td className="text-wrap">{item.anotacoes}</td>
                                <td>
                                    <a className="btn btn-primary m-0 py-1"
                                       href={route('admin.sinistros.show', item.id)}>
                                        Ver
                                    </a>
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
