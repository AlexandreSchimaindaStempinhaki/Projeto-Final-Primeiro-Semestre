import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items : center;
    flex-direction: row;
    background: linear-gradient(to top right, #000112, #000352);
`;

export const NavigationItem = styled.div`
    color: #ffffff;
    font-size: 2.3vw;
    text-shadow: 1px 1px 3px #ffffff;
    cursor: pointer;
    margin: 2vw 2vw 6vh 2vw;
    opacity: 1;
    border-radius: 2vh;
    padding: 1vh;
    
    &:hover {
        transform: scale(1.05);
        opacity: 0.8;
    }

    &.active {
    transition: 0.5s ease;
    background-color: #000000;
    }
`;

export const ImagemPerfil = styled.img`
    height: 10vh;
    width: auto;
    margin-left: auto;

    @media (max-width: 800px) {
        display: none;
    }
`

export const NomeUsuario = styled.h2`
    color: white;
    font-size: 1.8vw;
    margin-left: 1vw;

    @media (max-width: 800px) {
        display: none;
    }
`;


export const Logout = styled.input.attrs({type: 'submit', value: 'Logout'})`
    all: unset;
    text-align: center;
    background-color: #ffffff;
    border-radius: 1vh;
    width: 8vw;
    margin: 2vw 0vw 5vh 2vw;
    font-size: 2vw;
    border: 0.1vw solid #000000;
    margin-left: auto;

    &:hover {
        opacity: 0.8;
    }
`;

export const Logo = styled.img`
    height: 20vh;
    width: auto;
`;

