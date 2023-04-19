import Layout from "@/Layouts/Admin/Layout";

export default function Home() {
    return (
        <Layout container titlePage="Dashboard" >
            <a className="btn btn-primary m-3" href={route('admin.pacotes.index')}>Pacotes</a>
            <a className="btn btn-primary m-3" href={route('admin.sinistros.index')}>Sinistros</a>
        </Layout>
    )
}
