import Imagem from '../../components/logo-login';
import CredenciaisCadastro from '../../components/credenciais-cadastro';

import { Container } from '../login/style';
export function Cadastro() {
    return(
        <Container>
            <Imagem />
            <CredenciaisCadastro />
        </Container>
    );
}