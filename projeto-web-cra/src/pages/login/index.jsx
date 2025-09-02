import Imagem from "../../components/logo-login";
import Credenciais from "../../components/credenciais-login"

import { Container } from "./style";

export function Login() {
    return(
        <Container>
            <Imagem />
            <Credenciais />
        </Container>
    );
}