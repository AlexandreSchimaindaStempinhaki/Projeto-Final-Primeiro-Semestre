import { Container, SubContainer, Rodape, Titulo, Imagem, Preco, SubTexto, Informacao, SubTitulo } from './style';

import InfoImagem from '../../../public/images/info2.png'
import ShopImagem from '../../../public/images/comprar.png'
export default function CardProduto(props){
    return(
        <Container>
            <Titulo>
                {props.name}
                    <Informacao src = {InfoImagem}/>
            </Titulo>
            <SubContainer>
                    <Imagem src = {props.image || "https://images.vexels.com/media/users/3/158669/isolated/preview/8715c32a3226480a53ddbbc08e7f83b8-notebook-ilustracao-laptop.png"} 
                    alt = {`Imagem - ${props.name}`}/>
                    <Preco>{props.price}</Preco>
                    <SubTexto>De: {props.brand}</SubTexto>
                    <SubTexto>Disponíveis: {props.quantity}</SubTexto>
                    <Rodape>
                        <SubTitulo>
                            Adicionar
                            <Informacao src = {ShopImagem}/>
                        </SubTitulo>
                    </Rodape>
            </SubContainer>
        </Container>
    )
}