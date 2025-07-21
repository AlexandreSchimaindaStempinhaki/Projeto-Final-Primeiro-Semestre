import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SubContainer = styled.div`
    width: 98%;
    height: 95%;
    border: 3px solid #000000;
    border-radius: 2vh;
    margin-bottom: 3vh;
`;

export const ComponenteTabela = styled.table`
    width: 100%;
    height: auto;
`;

const EsconderColunas = css`
    &.coluna-1 {
        @media (max-width: 900px){
            display: none;
        }
    }

    &.coluna-2 {
        @media (max-width: 800px){
            display: none;
        }
    }

    &.coluna-3 {
        @media (max-width: 700px){
            display: none;
        }
    }
`

export const Th = styled.th`
    font-size: 2vw;
    text-align: center;
    border-right: 0.25vw solid #000000;

    &:last-child {
        border-right: none;
    }

    @media (max-width: 800px){
        font-size: 4vw;
    }

    ${EsconderColunas}
`;

export const Td = styled.td`
    text-align: center;
    font-size: 1.5vw;
    color: ${({ isEven }) => isEven ? '#ffffff' : '#000000'};
    padding: 2vw;

    @media (max-width: 800px){
        font-size: 3vw;
    }

    ${EsconderColunas}
`;

export const Linha = styled.tr`
    position: relative;
    background-color: ${({ isEven }) => isEven ? '#00001d' : '#ffffff'};

    &:hover {
        opacity: 0.9;
    }
`;

export const BotaoAcao = styled.img`
    width: 3vw;
    height: auto;
    cursor: pointer;
`;

export const QuadradoBotaoAcao = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4vw;
    height: 4vw;
    margin: 0.5vw;
    border-radius: 2vh;

    &:hover {
        opacity: 0.5;
    }
`;

export const DivisaoIcons = styled.div`
    width: 15vw;
    display: inline-block;
    text-align: start;
`