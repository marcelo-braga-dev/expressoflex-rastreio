import Layout from "@/Layouts/Admin/Layout";
import {TextField} from "@mui/material";
import {useForm} from "@inertiajs/react";
import MenuItem from "@mui/material/MenuItem";

export default function ({status}) {
    const {setData, post} = useForm()

    function submit(e) {
        e.preventDefault()
        post(route('admin.pacotes.store'))
    }

    return (
        <Layout container titlePage="Cadastrar Pacotes" menu="pacotes" submenu="cadastrar"
            voltar={route('admin.pacotes.index')}>
            <form onSubmit={submit}>
                <div className="row row-cols-2">
                    <div className="col mb-3">
                        <TextField label="Nome do Vendedor" fullWidth required
                                   onChange={e => setData('nome_vendedor', e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-3">
                        <TextField label="Endereço do Destinatário" fullWidth required
                                   onChange={e => setData('endereco_destinatario', e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 mb-3">
                        <TextField label="Identificação" fullWidth
                                   onChange={e => setData('identificacao', e.target.value)}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <TextField type="datetime-local" label="Data" fullWidth required
                                   onChange={e => setData('data', e.target.value)}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <TextField label="Status" select fullWidth
                                   defaultValue="" required
                                   onChange={e => setData('status', e.target.value)}>
                            {status.map((item, index) => {
                                return (
                                    <MenuItem key={index} value={item.id}>{item.nome}</MenuItem>
                                )
                            })}
                        </TextField>
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-3">
                        <TextField label="Anotações" fullWidth
                                   onChange={e => setData('anotacoes', e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-4">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </form>
        </Layout>
    )
}
