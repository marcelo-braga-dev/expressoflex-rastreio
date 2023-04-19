import Layout from "@/Layouts/Admin/Layout";
import DadosPacote from "@/Components/Dados/DadosPacote";
import {ListItem, TextField} from "@mui/material";
import {useForm} from "@inertiajs/react";
import MenuItem from "@mui/material/MenuItem";

export default function ({pacote, status}) {
    const {post, setData} = useForm({
        id_pacote: pacote.id
    })

    function submit(e) {
        e.preventDefault()
        post(route('admin.sinistros.store'))
    }

    return (
        <Layout container titlePage="Abrir Sinistro de Pacote" menu="sinistros"
                voltar={route('admin.pacotes.show', pacote.id)}>
            <div className="row row-cols-2">
                <div className="col">
                    <DadosPacote dados={pacote}/>
                </div>
                <div className="col">
                    <form onSubmit={submit}>
                        <h6>Dados de abertura do Sinistro</h6>
                        <TextField className="mb-3" label="Motoboy" fullWidth required
                                   onChange={e => setData('motoboy', e.target.value)}/>
                        <div className="row row-cols-2">
                            <div className="col mb-3">
                                <TextField label="Status" select defaultValue="" required fullWidth
                                           onChange={e => setData('status', e.target.value)}>
                                    {status.map((item, index) => {
                                        return (
                                            <MenuItem key={index} value={item.id}>{item.nome}</MenuItem>
                                        )
                                    })}
                                </TextField>
                            </div>
                            <div className="col">
                                <TextField className="mb-3" type="datetime-local" fullWidth required
                                           onChange={e => setData('data', e.target.value)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <TextField className="mb-3" label="Anotações" fullWidth
                                           onChange={e => setData('anotacoes', e.target.value)}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <TextField type="file" inputProps={{multiple: true}} className="mb-3" fullWidth
                                           onChange={e => setData('anexos', e.target.files)}/>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary">Salvar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
