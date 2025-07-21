import React, { useState } from 'react';

import { Container } from '../container-produtos/style';

import CabecarioSecao from '../cabecario-secao';
import BarraPesquisa from '../barra-pesquisa';
import TabelaVendas from '../tabela-vendas';

export default function ContainerVendas() {
    const secoes = ['Histórico de Vendas', 'Realizar Nova Venda'];
    const secaoInicial = 'Histórico de Vendas';
    const [selecionado, setSelecionado] = useState(secaoInicial);

    return (
        <Container>
            <CabecarioSecao 
                secoes = {secoes}
                selecionado = {selecionado}
                setSelecionado = {setSelecionado}
            />

            <BarraPesquisa />
            <TabelaVendas />
        </Container>
    )
}