import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 5vh;
    display: block;
    width: 95vw;
    height: auto;
    border: 0.3vw solid #000000;
    border-radius: 2vh;
    margin-bottom: 5vh;
`;

export const Cabecario = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 10vh;
    border-bottom: 0.3vw solid #000000;
    padding: 2vw;
`;

export const Option = styled.h1`
    font-size: 1.7vw;
    margin: 2vw;
    cursor: pointer;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -12.5%;
        height: 0.25vw;
        width: 0%;
        background-color: #000000;
        opacity: 0;
        border-radius: 10vh;

        transition-origin: left;
        transition: width 0.75s ease, opacity 0.75s ease;
    }

    &.active::after{
        width: 125%;
        opacity: 1;
    }

`