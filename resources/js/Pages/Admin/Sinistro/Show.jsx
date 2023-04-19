import Layout from "@/Layouts/Admin/Layout";
import DadosPacote from "@/Components/Dados/DadosPacote";
import HistoricoSinistro from "@/Components/Dados/HistoricoSinistro";
import {TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useForm} from "@inertiajs/react";
import DadosSinistro from "@/Components/Dados/DadosSinistro";

export default function ({pacote, historico, status, sinistro}) {
    const {post} = useForm()

    function updateStatus(id, status) {
        post(route('admin.sinistros-update-status', {id, status}), {
            preserveScroll: true
        })
    }

    return (
        <Layout container titlePage="Informações do Sinistro" menu="sinistros" voltar={route('admin.sinistros.index')}>
            <div className="row row-cols-3">
                <div className="col">
                    <DadosPacote dados={pacote}/>
                </div>
                <div className="col">
                    <DadosSinistro dados={sinistro} />
                </div>
                <div className="col">
                    <TextField className="mb-3" select label="Status" defaultValue={sinistro.status_id} fullWidth
                               value={sinistro.status_id} onChange={e => updateStatus(pacote.id, e.target.value)}>
                        {status.map((item, index) => {
                            return (
                                <MenuItem key={index} value={item.id}>{item.nome}</MenuItem>
                            )
                        })}
                    </TextField>
                    <HistoricoSinistro dados={historico}/>
                </div>
            </div>
        </Layout>
    )
}
