import Layout from "@/Layouts/Admin/Layout";
import {ListItem, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useForm} from "@inertiajs/react";

export default function ({pacotes, status}) {
    const {post} = useForm()

    function updateStatus(id, status) {
        post(route('admin.pacotes-update-status', {id, status}), {
            preserveScroll: true
        })
    }

    function pesquisar(valor) {
        if (valor.length > 4) {console.log('valor')
            axios.get(route('admin')).then(response => {

            })
        }
    }

    return (
        <Layout container titlePage="Pacotes" menu="pacotes" submenu="cadastrados">
            <div className="row justify-content-between">
                <div className="col-auto">
                    <a className="btn btn-primary" href={route('admin.pacotes.create')}>Cadastrar Pacote</a>
                </div>
                <div className="col-auto">
                    <small className="d-block">Link de pesquisa:</small>
                    <small className="d-block">{route('clientes.pesquisa')}</small>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-hover table-sm text-sm">
                    <thead>
                    <tr>
                        <th>Data Status</th>
                        <th className="text-center">Código</th>
                        <th>Vendedor</th>
                        <th>Status</th>
                        <th>Endereço</th>
                        <th>Identif./Anotações</th>
                        <th>Cadastrado</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {pacotes.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.status_data}</td>
                                <td className="text-center">{item.codigo}</td>
                                <th className="text-wrap">{item.vendedor}</th>
                                <td className="text-wrap px-3">
                                    <TextField label="Status" select className="bg-white"
                                               defaultValue={item.status_id} required size="small"
                                               value={item.status_id} fullWidth
                                               onChange={e => updateStatus(item.id, e.target.value)}>
                                        {status.map((item, index) => {
                                            return (
                                                <MenuItem key={index} value={item.id}>{item.nome}</MenuItem>
                                            )
                                        })}
                                    </TextField>
                                </td>
                                <td className="text-wrap">{item.endereco}</td>
                                <td className="text-wrap">{item.anotacoes}<br/>{item.identificacao}</td>
                                <td>{item.data_cadastro}</td>
                                <td>
                                    <a className="btn btn-primary btn-sm py-1 px-2 m-0"
                                     href={route('admin.pacotes.show', item.id)}>Ver</a>
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
