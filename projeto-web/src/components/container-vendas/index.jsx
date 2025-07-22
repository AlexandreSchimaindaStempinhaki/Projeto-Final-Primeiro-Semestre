import React, { useState } from 'react';

import { Container } from '../container-produtos/style';

import CabecarioSecao from '../cabecario-secao';
import BarraFiltros from '../barra-filtros';
import TabelaVendas from '../tabela-vendas';

export default function ContainerVendas() {
    const secoes = ['Histórico de Vendas', 'Realizar Nova Venda'];
    const secaoInicial = 'Histórico de Vendas';
    const [selecionado, setSelecionado] = useState(secaoInicial);

    const [filtroSelecionado, setFiltroSelecionado] = useState('');
    const [textoSelecionado, setTextoSelecionado] = useState('');
    
    return (

        
        <Container>
            <CabecarioSecao 
                secoes = {secoes}
                selecionado = {selecionado}
                setSelecionado = {setSelecionado}
            />

            <BarraFiltros 
                filtroSelecionado = {filtroSelecionado}
                setFiltroSelecionado = {setFiltroSelecionado}
                pesquisa = {textoSelecionado}
                setPesquisa = {setTextoSelecionado}
            />

            <TabelaVendas 
            filtroSelecionado = {filtroSelecionado}
            pesquisa = {textoSelecionado}
            />
        </Container>
    )
}