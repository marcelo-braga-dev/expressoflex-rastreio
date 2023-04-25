import DadosPacote from "@/Components/Dados/DadosPacote";
import HistoricoPacote from "@/Components/Dados/HistoricoPacote";
import Layout from "@/Layouts/Clientes/Layout";
import HistoricoSinistro from "@/Components/Dados/HistoricoSinistro";
import DadosSinistro from "@/Components/Dados/DadosSinistro";

export default function ({pacote, historicoPacote, sinistro, sinistroHistorico}) {
    return (
        <Layout titlePage="Dados">
            <div className="row justify-content-end">
                <div className="col-auto">
                    <a className="btn btn-primary btn-sm" href={route('clientes.pesquisa')}>Voltar</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5>Pacote</h5>
                            <div className="row">
                                <div className="col">
                                    <DadosPacote dados={pacote}/>
                                </div>
                                <div className="col">
                                    <HistoricoPacote dados={historicoPacote}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {sinistro.id &&
                <div className="row">
                    <div className="col">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5>Sinistro</h5>
                                <div className="row">
                                    <div className="col">
                                        <DadosSinistro dados={sinistro}/>
                                    </div>
                                    <div className="col">
                                        <HistoricoSinistro dados={sinistroHistorico}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Layout>
    )
}
