import Layout from "@/Layouts/Admin/Layout";
import DadosPacote from "@/Components/Dados/DadosPacote";
import HistoricoSinistro from "@/Components/Dados/HistoricoSinistro";
import {TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {router, useForm} from "@inertiajs/react";
import DadosSinistro from "@/Components/Dados/DadosSinistro";
import SinistroAnexos from "@/Components/Dados/SinistroAnexos";

export default function ({pacote, historico, status, sinistro, anexos}) {
    const {post} = useForm()

    function updateStatus(id, status) {
        post(route('admin.sinistros-update-status', {id, status}), {
            preserveScroll: true
        })
    }

    function destroy() {
        router.post(route('admin.sinistros.destroy', pacote.id), {
            '_method': 'delete'
        })
    }

    return (
        <Layout container titlePage="Informações do Sinistro" menu="sinistros" voltar={route('admin.sinistros.index')}>
            <div className="row row-cols-3">
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                            <DadosPacote dados={pacote}/>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                            <DadosSinistro dados={sinistro}/>
                        </div>
                        <div className="col-auto text-end">
                            <button className="btn btn-link btn-sm text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="fas fa-trash-alt me-1"/>Excluir Sinistro
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h6>Status</h6>
                            <TextField className="mb-3 mt-2" select label="Atualizar Status"
                                       defaultValue={sinistro.status_id}
                                       fullWidth
                                       value={sinistro.status_id}
                                       onChange={e => updateStatus(pacote.id, e.target.value)}>
                                {status.map((item, index) => {
                                    return (
                                        <MenuItem key={index} value={item.id}>{item.nome}</MenuItem>
                                    )
                                })}
                            </TextField>
                            <HistoricoSinistro dados={historico}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h6>Anexos</h6>
                            <SinistroAnexos dados={anexos}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Excluir Sinistro</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Confirmar remoção de sinistro:
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                            onClick={() => destroy()}>Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
