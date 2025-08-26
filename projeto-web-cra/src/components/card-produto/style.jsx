import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 17.5vw;
    height: 45vh;
    margin: 3vh 0.5vw 3vh 0.5vw;
    border: 0.2vw solid #000000;
    border-radius: 3vh;
    background-color: #000112;
    padding-bottom: 0.2vw;

    @media (max-width: 800px){
        width: 40vw;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-top: 5vh;
    width: 100%;
    height: 90%;
    border: 0.5vw solid #000112;
    border-radius: 3vh;
    background-color: #ffffff;
    border-top-left-radius: 7.5vh;
    border-top-right-radius: 7.5vh;
    padding: 5vh 0vh 10vh 0vh;
`

export const Rodape = styled.div`;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 1vh;
    width: 90%;
    height: 5vh;
    border-radius: 5vh;
    background-color: #000112;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`

export const Titulo = styled.h1`
    position: absolute;
    width: 100%;
    top: 3vh;
    transform: translateY(-50%);
    color: #ffffff;
    font-size: 1vw;
    text-align: center;

    @media (max-width: 800px){
        font-size: 2vw;
    }
`

export const Imagem = styled.img`
    height: 15vh;
    width: auto;
`;

export const Preco = styled.h3`
    color: #008000;
    font-size: 1.5vw;

    @media (max-width: 800px){
        font-size: 3vw;
    }
`

export const SubTexto = styled.h5`
    color: #000000;
    font-size: 1vw;
    margin: 0;

    @media (max-width: 800px){
        font-size: 2vw;
    }
`;

export const Informacao = styled.img`
    width: 2vw;
    height: auto;
    border-radius: 0.5vw;
    margin-left: 1vw;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }

    @media (max-width: 800px){
        width: 4vw;
    }
`;

export const SubTitulo = styled.h1`
    color: #ffffff;
    font-size: 1.5vw;
    margin: 0;

    @media (max-width: 800px){
        font-size: 3vw;
    }
`;