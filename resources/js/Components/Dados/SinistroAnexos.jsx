import ImagePdf from "@/Components/Inputs/ImagePdf";

export default function SinistroAnexos({dados}) {
    return (
        <div className="row row-cols-2">
            {dados.map((item, index) => {
                return (
                    <div key={index} className="col mb-4">
                        <ImagePdf url={item.url}/>
                    </div>
                )
            })}
        </div>
    )
}
