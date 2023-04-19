export default function DadosPacote({dados}) {
    return (
        <>
            <h6>Dados</h6>
            <span className="d-block"><b>Vendedor: </b>{dados.vendedor}</span>
            <span className="d-block"><b>Endereço: </b>{dados.endereco}</span>
            <span className="d-block"><b>Status: </b>{dados.status}</span>
            <span className="d-block"><b>Identificação: </b>{dados.identificacao}</span>
            <span className="d-block"><b>Anotações: </b>{dados.anotacoes}</span>
            <span className="d-block"><b>Data Último Status: </b>{dados.data_cadastro}</span>
            <span className="d-block"><b>Data Cadastro: </b>{dados.status_data}</span>
        </>
    )
}
