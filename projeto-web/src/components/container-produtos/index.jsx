import React, { useState } from 'react';

import ProdutosDetalhados from '../produtos-detalhados';
import BarraPesquisa from '../barra-pesquisa'
import TabelaProdutos from '../tabela-produtos';
import CabecarioSecao from '../cabecario-secao';
import { Container, ContainerTabela, ContainerCards } from './style';
import { dataProdutos } from '../dados-ficticios';

export default function ContainerProdutos() {
    const secoes = ['Visão Simples', 'Visão Detalhada'];
    const secaoInicial = 'Visão Simples';
    const [selecionado, setSelecionado] = useState(secaoInicial);

    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [termoBuscaAtivo, setTermoBuscaAtivo] = useState('');

    const atualizarBusca = () => {
        setTermoBuscaAtivo(termoPesquisa);
    }

    const dataFiltrada = termoBuscaAtivo
        ? dataProdutos.filter(item =>
            item.name.toLowerCase().includes(termoBuscaAtivo.toLowerCase())
        ) : dataProdutos;



    return (
        <Container>
            <CabecarioSecao
                secoes={secoes}
                selecionado={selecionado}
                setSelecionado={setSelecionado}
            />

            <BarraPesquisa
                pesquisa={termoPesquisa}
                setPesquisa={setTermoPesquisa}
                buscarProduto={atualizarBusca}
            />


            <ContainerTabela className={selecionado === 'Visão Simples' ? '' : 'disabled'}>
                <TabelaProdutos dataFiltrada={dataFiltrada} />
            </ContainerTabela>

            <ContainerCards className={selecionado === 'Visão Detalhada' ? '' : 'disabled'}>
                <ProdutosDetalhados dataFiltrada={dataFiltrada} />
            </ContainerCards>
        </Container>
    )
}