import styled from 'styled-components';

import { TextEmail as BaseTextEmail, BotaoLogar} from '../credenciais-login/style';

export const TextNome = styled(BaseTextEmail).attrs({type: 'name'})``;

export const BotaoCadastrar = styled(BotaoLogar).attrs({value: 'Registrar'})`
    margin-top: 5vh;
`;