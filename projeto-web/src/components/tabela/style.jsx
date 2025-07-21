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
    font-size: 1.5vw;
    color: white;
    padding: 2vw;

    @media (max-width: 800px){
        font-size: 3vw;
    }

    ${EsconderColunas}
`;

export const Linha = styled.tr`
    background-color: ${({ isEven }) => isEven ? '#00001a' : '#000040'};

    &:hover {
        opacity: 0.9;
    }
`;

export const BotaoAcao = styled.img`
    width: 3vw;
    height: auto;
    margin: 0.5vw;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`;