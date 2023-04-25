export default function SinistroAnexos({dados}) {
    return (
        dados.map((item, index) => {
            return (
                <div key={index} className="row m-2 mb-4">
                    <img alt="img" src={item.url}/>
                </div>
            )
        })
    )
}
