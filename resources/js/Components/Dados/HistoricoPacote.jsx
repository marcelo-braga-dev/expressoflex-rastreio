export default function HistoricoPacote({dados}) {
    return (
        <>
            <h6>Histórico</h6>
            {dados.map((item, index) => {
                return (
                    <span key={index} className="d-block mb-2">
                        <b className="me-4">{item.data}</b>{item.status.nome}
                    </span>
                )
            })}
        </>
    )
}
