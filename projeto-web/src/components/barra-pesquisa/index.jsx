import React, { useState } from 'react'
import { Container, TextPesquisa, BotaoBuscar, Lupa, BotaoAdicionarProduto, Mais } from "./style"

import LupaImagem from '../../images/lupa.png'
import MaisImagem from '../../images/mais.png'


export default function BarraPesquisa(){
    const [pesquisa, setPesquisa] = useState('');


    return (
        <Container>
            <TextPesquisa id = "pesquisa" name = "pesquisa" placeholder = "Buscar" value = {pesquisa}
            onChange={(e => setPesquisa(e.target.value))}/>

            <BotaoBuscar>
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