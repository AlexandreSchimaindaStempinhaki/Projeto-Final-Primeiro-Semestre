import styled from 'styled-components';

import { TextEmail } from '../credenciais-login/style';

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const TextPesquisa = styled(TextEmail).attrs({ type: 'search' })`
    width: 70%;
    margin: 2vh;
`;

export const BotaoBuscar = styled.button`
    all: unset;
    border: 0.1vw solid #000000;
    border-radius: 2vh;
    width: 13%;
    height: 6vh;
    background-color: #000112;
    color: #ffffff;
    display: flex;
    align-items: center;
    font-size: 2vw;
    padding-left: 2vw;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 800px){
        font-size: 3vw;
    }
`;

export const Lupa = styled.img`
    width: 3vw;
    height: auto;
    margin-left: auto;

    @media (max-width: 800px){
        display: none;
    }
`;

export const BotaoAdicionarProduto = styled(BotaoBuscar)`
    background-color: #000352;
    margin: 0vw 1.5vw 0vw 1.5vw;
    width: 8%;
    display: flex;
    justify-content: center;
    padding-left: 0.5vw;
    font-size: 1vw;
`;

export const Mais = styled.img`
    width: 3vw;
    height: auto;
    margin-left; auto;
`