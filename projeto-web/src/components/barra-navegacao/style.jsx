import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
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

    @media (max-width: 800px){
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

    @media (max-width: 800px){
        width: 16vw;
        font-size: 4vw;
    }
`;

export const Logo = styled.img`
    height: 20vh;
    width: auto;
`;

export const Menu = styled.img`
    height: 10vh;
    width: auto;
    margin: 2vw;
    cursor: pointer;
    display: block;

    @media (min-width: 800px){
        display: none;
    }

    &:hover {
        opacity: 0.8;
    }

    ${({ desativado }) => 
        desativado && `
            display: none;
        `
    }
`;

export const SubMenu = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 40vw;
    height: 100%;
    border-right: 0.5vw solid #ffffff;
    border-radius: 2vh;

    @media (min-width: 800px){
        display: none;
    }
`;

export const SubMenuOption = styled.h1`
    width: 80%;
    border-radius: 2vh;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        background-color: #000008;
    }
`

export const SubMenuTexto = styled.h1`
    font-size: 4vw;
    color: #ffffff;
    margin: 0;

`;

export const FecharMenu = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    width: 5vw;
    height: auto;
    cursor: pointer;
    margin: 1vw;

    &:hover {
        opacity: 0.5;
    }
`
