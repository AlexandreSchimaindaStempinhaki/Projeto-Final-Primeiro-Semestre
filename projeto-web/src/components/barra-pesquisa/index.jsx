import { Container, TextPesquisa, BotaoBuscar, Lupa, BotaoAdicionarProduto, Mais } from "./style"

import LupaImagem from '../../../public/images/lupa.png'
import MaisImagem from '../../../public/images/mais.png'


export default function BarraPesquisa(props){

    return (
        <Container>
            <TextPesquisa id = "pesquisa" name = "pesquisa" placeholder = "Buscar" value = {props.pesquisa}
            onChange={(e => props.setPesquisa(e.target.value))}/>

            <BotaoBuscar onClick={props.buscarProduto}>
                Buscar
                <Lupa src = {LupaImagem}/>
            </BotaoBuscar>

            <BotaoAdicionarProduto>
                 Adicionar Produto
                <Mais src = {MaisImagem}/>
            </BotaoAdicionarProduto>
        </Container>

    )

}