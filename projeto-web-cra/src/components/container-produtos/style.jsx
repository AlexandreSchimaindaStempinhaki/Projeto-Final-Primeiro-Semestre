import styled, { css } from 'styled-components';

export const Container = styled.div`
    margin-top: 5vh;
    display: block;
    width: 95vw;
    height: auto;
    border: 0.3vw solid #000000;
    border-radius: 2vh;
    margin-bottom: 5vh;
`;

export const EsconderElemento = css`
    &.disabled {
        display: none;
    }
`;

export const ContainerTabela = styled.div`
    ${EsconderElemento};
`;

export const ContainerCards = styled.div`
    ${EsconderElemento};
`;