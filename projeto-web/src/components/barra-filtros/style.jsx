import styled from 'styled-components';

import { BotaoAdicionarProduto, Mais } from '../barra-pesquisa/style';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const EscolherFiltro = styled.select`
    width: auto;
    height: 6vh;
    background-color: #000112;
    color: white;
    border: 0.2vw solid #000009;
    border-radius: 2vh;
    text-align: center;
    font-size: 1.5vw;

    &:hover {
        opacity: 0.5;
    }
`;

export const OpcaoFiltro = styled.option`
    border-radius: 2vh;
`;

export const BotaoFiltrar = styled(BotaoAdicionarProduto)`
    font-size: 1.5vw;
`;

export const Filtro = styled(Mais)``;