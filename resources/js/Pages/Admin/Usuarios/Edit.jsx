import Layout from "@/Layouts/Admin/Layout";
import {TextField} from "@mui/material";
import {router, useForm} from "@inertiajs/react";

export default function ({dados, errors}) {
    const {data, setData} = useForm({
        nome: dados.nome,
        email: dados.email,
    })

    function submitDados(e) {
        e.preventDefault()
        router.post(route('admin.usuarios.update', dados.id), {
            '_method': 'put',
            ...data
        })
    }

    function submitSenha(e) {
        e.preventDefault()
        router.post(route('admin.usuarios-atualizar-senha', dados.id), {
            '_method': 'put',
            ...data
        })
    }

    return (
        <Layout container titlePage="Cadastrar Usuário" voltar={route('admin.usuarios.index')}>
            {errors.password && <div className="mb-4"><span className="text-danger">{errors.password}</span></div>}
            {errors.email && <div className="mb-4"><span className="text-danger">{errors.email}</span></div>}

            <div className="row row-cols-2">
                <div className="col mb-4">
                    <form onSubmit={submitDados}>
                        <div className="card">
                            <div className="card-body">
                                <div className="col mb-4">
                                    <TextField label="Nome" fullWidth required defaultValue={data.nome}
                                               onChange={e => setData('nome', e.target.value)}/>
                                </div>
                                <div className="col mb-3">
                                    <TextField type="email" label="E-mail" fullWidth required defaultValue={data.email}
                                               onChange={e => setData('email', e.target.value)}/>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary">Atualizar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col">
                    <form onSubmit={submitSenha}>
                        <div className="card">
                            <div className="card-body">
                                <div className="col mb-3">
                                    <TextField type="password" label="Senha" fullWidth required
                                               onChange={e => setData('password', e.target.value)}/>
                                </div>
                                <div className="col mb-3">
                                    <TextField type="password" label="Confirmar Senha" fullWidth required
                                               onChange={e => setData('password_confirmation', e.target.value)}/>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary">Atualizar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
