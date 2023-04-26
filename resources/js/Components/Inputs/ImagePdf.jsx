import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function ImagePdf({url}) {

    if (url && url.split('.').pop() === 'pdf') {
        return (
            <a className="btn btn-danger btn-sm mt-2 mb-3" href={url}
               target="_blank">
                <i className="fas fa-file-pdf"></i> Abrir PDF
            </a>)
    }

    if (url) {
        return (
            <div className="w-100 text-center border rounded">
                <img className="w-100 mb-1 rounded" alt="" src={url} style={{maxHeight: "100%"}}/>

                <div className="text-end">
                    <a className="btn btn-link btn-sm m-0" href={url} target="_blank" download>
                        <FileDownloadIcon/> Download
                    </a>
                </div>
            </div>
        )
    }
}
