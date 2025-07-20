import styled from 'styled-components';

import { Titulo as DesignTitulo, BotaoLogar } from '../credenciais-login/style';

export const Titulo = styled(DesignTitulo)`
    font-size: 3vw;
    margin-bottom: 3vh;
    margin-top: 15vh;
`;

export const SubTitulo = styled.h6`
    font-size: 1.7vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
`;

export const BotaoEnviar = styled(BotaoLogar).attrs({value: 'Enviar'})`
`;