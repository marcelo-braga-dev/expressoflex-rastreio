import {useEffect} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import {Head, useForm} from '@inertiajs/react';
import {Checkbox, FormControlLabel, TextField} from "@mui/material";
import * as React from "react";

export default function Login({status}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in"/>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="row justify-content-center">
                <div className="col-auto">
                    <img src="/storage/crm/imagens/logo.jpeg" className="" width="200" alt="Logo"/>
                </div>
            </div>
            <form onSubmit={submit}>
                <TextField fullWidth
                           className="mt-4"
                           label="Email:"
                           type="email"
                           name="email"
                           value={data.email}
                           autoComplete="username"
                           onChange={(e) => setData('email', e.target.value)}/>
                <small>{errors.email}</small>

                <TextField fullWidth
                           className="mt-4"
                           label="Senha:"
                           type="password"
                           name="password"
                           value={data.password}
                           autoComplete="current-password"
                           onChange={(e) => setData('password', e.target.value)}
                />
                <small className="d-block">{errors.password}</small>

                <FormControlLabel
                    label="Lembrar acesso"
                    name="remember"
                    defaultValue=""
                    onChange={(e) => setData('remember', e.target.checked)}
                    control={<Checkbox size="small" checked={data.remember}/>}/>

                <div className="mt-4 text-center">
                    <button type="submit" className="btn btn-primary" disabled={processing}>
                        Entrar
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
