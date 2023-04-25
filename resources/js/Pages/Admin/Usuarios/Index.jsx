import Layout from "@/Layouts/Admin/Layout";

export default function ({usuarios}) {
    return (
        <Layout titlePage="Usuários" container>
            <div className="row justify-content-end">
                <div className="col-auto">
                    <a href={route('admin.usuarios.create')} className="btn btn-primary">Cadastrar Usuário</a>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {usuarios.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-center">#{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                                <td>
                                    <a href={route('admin.usuarios.edit', item.id)}
                                       className="btn btn-primary btn-sm">Editar</a>
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
