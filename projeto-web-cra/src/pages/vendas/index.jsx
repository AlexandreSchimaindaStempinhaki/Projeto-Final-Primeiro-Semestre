import BarraNavegacao from "../../components/barra-navegacao"
import ContainerVendas from "../../components/container-vendas";

import { Container } from "../produtos/style";

export function Vendas(){
    return(
        <Container>
            <BarraNavegacao />
            <ContainerVendas />
        </Container>
    )
}