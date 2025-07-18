import { Container, Imagem, Rodape } from './style';
import LinkImagem from '../../images/logo.png';

export default function Logo() {
    return (
        <Container>
            <Imagem src = {LinkImagem} alt = "Logo da Empresa Fornecedora do Sistema"/>
            <Rodape>© Alexandre Schimainda Stempinhaki, 2025</Rodape>
        </Container>
    )
}