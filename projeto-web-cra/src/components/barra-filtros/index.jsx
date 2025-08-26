import React, { useState } from 'react';
import { TextPesquisa } from "../barra-pesquisa/style";

import { Container, EscolherFiltro, OpcaoFiltro, BotaoFiltrar, Filtro } from './style';

import ImagemFiltro from '../../images-geral/images/filtro.png'

export default function BarraFiltros(props) {

    const opcoesFiltro = [
        { label: 'Antes dessa Data', value: 'dataAnterior' },
        { label: 'Depois dessa Data', value: 'dataPosterior' },
        { label: 'Preço Igual ou Superior', value: 'maisCaro' },
        { label: 'Preço Igual ou Inferior', value: 'maisBarato' },
        { label: 'Status', value: 'status' }
    ];



    const [pesquisaLocal, setPesquisaLocal] = useState('');
    const [filtroSelecionadoLocal, setFiltroSelecionadoLocal] = useState('');

    function aplicarFiltro() {
        props.setPesquisa(pesquisaLocal);
        props.setFiltroSelecionado(filtroSelecionadoLocal);
    }

    return (
        <Container>
            <TextPesquisa id="pesquisa" name="pesquisa" placeholder="Digite algo para Filtrar"
                value={pesquisaLocal}
                onChange={(e) => setPesquisaLocal(e.target.value)} />

            <EscolherFiltro value={filtroSelecionadoLocal}
                onChange={(e) => setFiltroSelecionadoLocal(e.target.value)}
            >
                {opcoesFiltro.map(({label, value}) => (
                    <OpcaoFiltro key = {value} value={value}>
                        {label}
                    </OpcaoFiltro>
                ))}
            </EscolherFiltro>

            <BotaoFiltrar onClick={aplicarFiltro}>
                Filtrar
                <Filtro src={ImagemFiltro} alt="Imagem Filtro" />
            </BotaoFiltrar>

        </Container>
    )
}