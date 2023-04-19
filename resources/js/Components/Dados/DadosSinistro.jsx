export default function DadosSinistro({dados}) {
    return (
        <>
            <h6>Dados do Sisnistro</h6>
            <span className="d-block"><b>Motoboy: </b>{dados.motoboy}</span>
            <span className="d-block"><b>Data: </b>{dados.data}</span>
            <span className="d-block"><b>Status: </b>{dados.status}</span>
            <span className="d-block"><b>Anotações: </b>{dados.anotacoes}</span>
        </>
    )
}
