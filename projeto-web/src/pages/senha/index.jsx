import Imagem from '../../components/logo-login';
import RecuperarSenha from '../../components/recuperar-senha';
import { Container } from '../login/style';

export function Senha() {
    return(
        <Container>
            <Imagem />
            <RecuperarSenha />
        </Container>
    )
}