import GuestLayout from '@/Layouts/GuestLayout';
import {Head, useForm} from "@inertiajs/react";
import * as React from "react";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
import {useState} from "react";

export default function ({errors}) {
    const {setData, data, post} = useForm()
    const [alert, setAlert] = useState(false)

    function submit(e) {
        e.preventDefault()

        if (data.dados_pesquisa.length >= 4) {
            post(route('clientes.pesquisar'))
            setAlert(false)
        } else setAlert('Insira no mínimo 4 caracteres para pesquisar.')
    }

    return (
        <GuestLayout>
            <Head title="Pesquisar Pacote"/>

            <div className="row justify-content-center">
                <div className="col-auto">
                    <img src="/storage/crm/imagens/logo.jpeg" className="" width="200" alt="Logo"/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <p>Pesquisa de pacotes ou sinistros.</p>
                </div>
            </div>
            <form onSubmit={submit}>
                {errors[0] && <span className="text-danger">{errors[0]}</span>}
                {alert && <span className="text-danger">{alert}</span>}

                <div className="row mt-4">
                    <div className="col">
                        <TextField required label="Pesquisar" fullWidth
                                   onChange={e => setData('dados_pesquisa', e.target.value)}/>
                    </div>
                </div>
                <div className="row mt-4 justify-content-center">
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">
                            Pesqusar
                        </button>
                    </div>
                </div>
            </form>
        </GuestLayout>
    )
}
