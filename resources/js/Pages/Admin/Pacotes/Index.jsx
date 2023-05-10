import Layout from "@/Layouts/Admin/Layout";
import React, {useState} from 'react';
import {TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useForm} from "@inertiajs/react";

import DataTable from 'react-data-table-component';

const FilterComponent = ({filterText, onFilter, setFiltro, status, setStatusFiltro}) => (
    <div className="row justify-content-end g-md-6">
        <div className="col-12 col-md-auto mb-3">
            <TextField style={{width: 180}}
                       select label="Status" size="small" defaultValue=""
                       onChange={event => setStatusFiltro(event.target.value)}>
                <MenuItem value="">Todos</MenuItem>
                {status.map((item, index) => {
                    return (
                        <MenuItem key={index} value={item.id}>
                            {item.nome}
                        </MenuItem>
                    )
                })}
            </TextField>
        </div>
        <div className="col-auto">
            <TextField
                select label="Filtro" defaultValue="codigo" size="small"
                onChange={event => setFiltro(event.target.value)}>
                <MenuItem value="codigo">
                    Código
                </MenuItem>
                <MenuItem value="vendedor">
                    Vendedor
                </MenuItem>
                <MenuItem value="endereco">
                    Endereço
                </MenuItem>
                <MenuItem value="anotacoes">
                    Anotações
                </MenuItem>
            </TextField>
            <TextField
                id="search"
                type="text"
                placeholder="Pesquisar..."
                value={filterText}
                onChange={onFilter}
                size="small"
            />
        </div>
    </div>
);

export default function ({pacotes, status}) {
    const {post} = useForm()

    function updateStatus(id, status) {
        post(route('admin.pacotes-update-status', {id, status}), {
            preserveScroll: true
        })
    }

    const [filterText, setFilterText] = React.useState('');
    const [filtro, setFiltro] = useState('codigo');
    const [statusFiltro, setStatusFiltro] = useState('');

    React.useEffect(() => {
        if (statusFiltro) setFiltro('status')
    }, [statusFiltro]);

    const subHeaderComponentMemo = React.useMemo(() => {
        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)}
                             filterText={filterText}
                             setFiltro={setFiltro}
                             status={status}
                             setStatusFiltro={setStatusFiltro}/>
        );
    }, [filterText]);

    const linhas = pacotes.map(function (items) {
        return {
            id: items.id,
            status_id: items.status.id,
            status_data: items.status_data,
            codigo: items.codigo,
            vendedor: items.vendedor,
            endereco: items.endereco,
            anotacoes: items.anotacoes,
        }
    });

    const columns = [
        {
            name: 'Código',
            selector: row => <span>{row.codigo}<br/>{row.status_data}</span>,
            sortable: true,
            grow: 0.7,
        }, {
            name: 'Vendedor',
            selector: row => <span className="text-wrap"><b>{row.vendedor}</b></span>,
            sortable: true,
        }, {
            name: 'Status',
            selector: row => <TextField select className="bg-white"
                                        defaultValue={row.status_id} required size="small"
                                        value={row.status_id} fullWidth style={{width: 170}}
                                        onChange={e => updateStatus(row.id, e.target.value)}>
                {status.map((item, index) => {
                    return (
                        <MenuItem key={index} value={item.id}>{item.nome}</MenuItem>
                    )
                })}
            </TextField>,
            grow: 1.4,
        }, {
            name: 'Endereço',
            selector: row => <span className="text-wrap">{row.endereco}</span>,
            sortable: true,
        }, {
            name: 'Anotações',
            selector: row => <span className="text-wrap">{row.anotacoes}</span>,
            sortable: true,
        }, {
            name: '',
            selector: row => <a className="btn btn-primary btn-sm py-1 px-3 m-0"
                                href={route('admin.pacotes.show', row.id)}>Ver</a>,
            sortable: false,
        },
    ]

    const filteredItems = linhas.filter(
        item => filtro === 'id' &&
            item.id && item.id.toString() === filterText
            || filtro === 'id' && filterText === ''

            || filtro === 'codigo' &&
            item.codigo && item.codigo.toLowerCase().includes(filterText.toLowerCase())

            || filtro === 'vendedor' &&
            item.vendedor && item.vendedor.toLowerCase().includes(filterText.toLowerCase())

            || filtro === 'anotacoes' &&
            item.anotacoes && item.anotacoes.toLowerCase().includes(filterText.toLowerCase())

            || filtro === 'endereco' &&
            item.endereco && item.endereco.toLowerCase().includes(filterText.toLowerCase())

            || filtro === 'status' &&
            item.status_id && item.status_id === statusFiltro
            || filtro === 'status' && statusFiltro === ''
    )

    return (
        <Layout container titlePage="Pacotes" menu="pacotes" submenu="cadastrados">
            <div className="row justify-content-between mb-3">
                <div className="col-auto">
                    <a className="btn btn-primary" href={route('admin.pacotes.create')}>Cadastrar Pacote</a>
                </div>
                <div className="col-auto">
                    <small className="d-block">Link de pesquisa:</small>
                    <small className="d-block">{route('clientes.pesquisa')}</small>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                paginationPerPage={25}
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                striped
                highlightOnHover
                selectableRowsHighlight
            />
        </Layout>
    )
}
