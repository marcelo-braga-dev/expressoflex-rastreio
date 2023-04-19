import Layout from "@/Layouts/Admin/Layout";

export default function ({sinistros}) {
    return (
        <Layout container titlePage="Sinistros" menu="sinistros">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Data</th>
                        <th>Motoboy</th>
                        <th>Vendedor</th>
                        <th>Status</th>
                        <th>Anotações</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {sinistros.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="col-1">{item.data}</td>
                                <th className="text-wrap">{item.motoboy}</th>
                                <td>{item.vendedor}</td>
                                <td>{item.status}</td>
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