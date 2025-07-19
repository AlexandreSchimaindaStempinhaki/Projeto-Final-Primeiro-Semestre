import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Titulo = styled.h1`
    margin-top: 2vh;
    font-size: 4vw;
    text-shadow: 4px 4px 7px #00022e;
    align-text: center;
`;

export const Dados = styled.div`
    display: block;
    width: 40vw;
    height: auto;
    // background-color: #000000;
`;

export const Nome = styled.h3`
    font-size: 2vw;
    text-shadow: 1px 1px 2px #00022e;
`;

export const TextEmail = styled.input.attrs({ type: 'email' })`
    width: 100%;
    height: 6vh;
    font-size: 2vw;
    border: 0.25vw solid #000124;
    border-radius: 1vh;
    

    &:focus {
        outline: none;
        box-shadow: 3px 3px 10px #000352;
    }
`;

export const TextSenha = styled(TextEmail).attrs({ type: 'password' })``;

export const SenhaPerdida = styled.h5`
    font-size: 1.2vw;
    text-align: end;
    color: #000240;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 1vh;

    &:hover {
        opacity: 0.8;
    }
`;

export const BotaoLogar = styled.input.attrs({ type: 'submit', value: 'Entrar'})`
    all: unset;
    display: block;
    width: 100%;
    height: 10vh;
    font-size: 2.5vw;
    text-align: center;
    background: linear-gradient(to top right, #000112, #000352);
    color: #ffffff;
    border: 0.1vw solid #000000;
    border-radius: 2vh;
    margin: 0 auto;
    margin-top: 2vh;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

export const Cadastrar = styled(SenhaPerdida)`
    text-align: center;
    margin-bottom: 3vh;
`

export const LoginsAlternativos = styled.button`
    position: relative;
    text-align: center;
    width: 100%;
    height: 8vh;
    background-color: #ffffff;
    border: 0.2vw solid #000000;
    border-radius: 2vh;
    cursor: pointer;
    margin-top: 2vh;
    box-shadow: 0px 2px 4px #000000;
    font-size: 1.5vw;

    &: hover{
        opacity: 0.8;
    }

    img{
        position: absolute;
        left: 2vw;
        top: 50%;
        transform: translateY(-50%);
        width: 2vw;
        height: auto;
    }
`;