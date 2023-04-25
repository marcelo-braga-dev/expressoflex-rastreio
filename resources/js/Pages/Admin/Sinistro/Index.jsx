import Layout from "@/Layouts/Admin/Layout";
import React, {useState} from 'react';
import {TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import DataTable from 'react-data-table-component';

const FilterComponent = ({filterText, onFilter, setFiltro, status, setStatusFiltro}) => (
    <div className="row justify-content-end w-100 row-cols-3">
        <div className="col">
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
        <div className="col">
            <TextField
                select label="Filtro" defaultValue="codigo" size="small"
                onChange={event => setFiltro(event.target.value)}>
                <MenuItem value="codigo">
                    Código
                </MenuItem>
                <MenuItem value="vendedor">
                    Vendedor
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

export default function ({sinistros, status}) {

    const [filterText, setFilterText] = React.useState('');
    const [filtro, setFiltro] = useState('codigo');
    const [statusFiltro, setStatusFiltro] = useState('');

    const subHeaderComponentMemo = React.useMemo(() => {
        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)}
                             filterText={filterText}
                             setFiltro={setFiltro}
                             status={status}
                             setStatusFiltro={setStatusFiltro}/>
        );
    }, [filterText]);

    const linhas = sinistros.map(function (items) {
        return {
            id: items.id,
            data: items.data,
            codigo: items.codigo,
            motoboy: items.motoboy,
            vendedor: items.vendedor,
            status: items.status,
            status_id: items.status_id,
            reembolso: items.reembolso,
            anotacoes: items.anotacoes,
        }
    });

    const columns = [
        {
            name: 'Código',
            selector: row => <span className="text-wrap">{row.codigo}<br/>{row.data}</span>,
            sortable: true,
            grow: 0.7,
        }, {
            name: 'Motoboy',
            selector: row => <span className="text-wrap">{row.motoboy}</span>,
            sortable: true,
        }, {
            name: 'Vendedor',
            selector: row => <span className="text-wrap">{row.vendedor}</span>,
            sortable: true,
        }, {
            name: 'Status',
            selector: row => <span className="text-wrap">{row.status}</span>,
            sortable: true,
        }, {
            name: 'Reembolso',
            selector: row => <span className="text-wrap">R$ {row.reembolso}<br/>{row.anotacoes}</span>,
            sortable: true,
        }, {
            name: '',
            selector: row => <a className="btn btn-primary m-0 py-1"
                                href={route('admin.sinistros.show', row.id)}> Ver</a>,
            sortable: false,
        },
    ]

    React.useEffect(() => {
        if (statusFiltro) setFiltro('status')
    }, [statusFiltro]);

    const filteredItems = linhas.filter(
        item => filtro === 'id' &&
            item.id && item.id.toString() === filterText
            || filtro === 'id' && filterText === ''

            || filtro === 'codigo' &&
            item.codigo && item.codigo.toLowerCase().includes(filterText.toLowerCase())

            || filtro === 'vendedor' &&
            item.vendedor && item.vendedor.toLowerCase().includes(filterText.toLowerCase())

            || filtro === 'status' &&
            item.status_id && item.status_id === statusFiltro
            || filtro === 'status' && statusFiltro === ''
    )

    return (
        <Layout container titlePage="Sinistros" menu="sinistros">

            <div className="row">
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
