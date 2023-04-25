export default function DadosSinistro({dados}) {
    return (
        <>
            <h6>Dados do Sisnistro</h6>
            <span className="d-block mb-2"><b>Motoboy: </b>{dados.motoboy}</span>
            <span className="d-block mb-2"><b>Reembolso: </b>R$ {dados.reembolso}</span>
            <span className="d-block mb-2"><b>Data: </b>{dados.data}</span>
            <span className="d-block mb-2"><b>Status: </b>{dados.status}</span>
            <span className="d-block mb-2"><b>Anotações: </b>{dados.anotacoes}</span>
        </>
    )
}
