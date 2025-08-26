import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    margin: 1vw;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    @media (max-width: 800px){
        grid-template-columns: 1fr 1fr;
    }
`