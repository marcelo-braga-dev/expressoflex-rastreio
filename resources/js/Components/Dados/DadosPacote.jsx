export default function DadosPacote({dados}) {
    return (
        <>
            <h6>Dados do Pacote</h6>
            <span className="d-block mb-2"><b>Código: </b>{dados.codigo}</span>
            <span className="d-block mb-2"><b>Vendedor: </b>{dados.vendedor}</span>
            <span className="d-block mb-2"><b>Endereço: </b>{dados.endereco}</span>
            <span className="d-block mb-2"><b>Status: </b>{dados.status.nome}</span>
            <span className="d-block mb-2"><b>Identificação: </b>{dados.identificacao}</span>
            <span className="d-block mb-2"><b>Anotações: </b>{dados.anotacoes}</span>
            <span className="d-block mb-2"><b>Data Último Status: </b>{dados.data_cadastro}</span>
            <span className="d-block mb-2"><b>Data Cadastro: </b>{dados.status_data}</span>
        </>
    )
}
