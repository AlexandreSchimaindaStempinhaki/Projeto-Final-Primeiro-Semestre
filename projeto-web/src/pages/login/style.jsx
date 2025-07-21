import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 40vw 60vw;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;

    @media (max-width : 800px) {
        grid-template-columns: 0vw 100vw;
        transform: scale(1.66);
        transform-origin: top;
    }
`;