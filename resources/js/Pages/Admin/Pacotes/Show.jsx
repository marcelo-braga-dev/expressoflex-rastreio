import Layout from "@/Layouts/Admin/Layout";
import DadosPacote from "@/Components/Dados/DadosPacote";
import HistoricoPacote from "@/Components/Dados/HistoricoPacote";

export default function ({pacote, historico}) {
    return (
        <Layout container="Pacote" titlePage="Informações do Pacote" menu="pacote" submenu="cadastrados"
                voltar={route('admin.pacotes.index')}>

            <div className="row row-cols-2">
                <div className="col mb-4">
                    <DadosPacote dados={pacote}/>
                </div>
                <div className="col mb-4">
                    <HistoricoPacote dados={historico}/>
                </div>
            </div>
            <div className="row">
                <div className="col-auto">
                    <a className="btn btn-danger"
                       href={route('admin.sinistros.create', {id: pacote.id})}>Abrir Sinistro</a>
                </div>
            </div>
        </Layout>
    )
}