import { Container } from './style';
import CardProduto from "../card-produto";

export default function ProdutosCards(props){
    return(
        <Container>
            {props.dataFiltrada.map((produto, id) => (
                <CardProduto 
                    key = {id}
                    name = {produto.name}
                    quantity = {produto.quantity}
                    price = {produto.price}
                    brand = {produto.brand}
                    image = {produto.image}
                />
            ))}
        </Container>
    )
}