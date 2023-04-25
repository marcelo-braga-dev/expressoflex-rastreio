import Layout from "@/Layouts/Admin/Layout";
import {TextField} from "@mui/material";
import {router, useForm} from "@inertiajs/react";

export default function ({errors}) {
    const {setData, post} = useForm()

    function submit(e) {
        e.preventDefault()
        post(route('admin.usuarios.store'))
    }

    return (
        <Layout container titlePage="Editar Dados" voltar={route('admin.usuarios.index')}>
            {errors.password && <div className="mb-4"><span className="text-danger">{errors.password}</span></div>}
            {errors.email && <div className="mb-4"><span className="text-danger">{errors.email}</span></div>}

            <form onSubmit={submit}>
                <div className="row row-cols-4">
                    <div className="col mb-3">
                        <TextField label="Nome" fullWidth required
                                   onChange={e => setData('nome', e.target.value)}/>
                    </div>
                    <div className="col mb-3">
                        <TextField type="email" label="E-mail" fullWidth required
                                   onChange={e => setData('email', e.target.value)}/>
                    </div>
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
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </form>

        </Layout>
    )
}
