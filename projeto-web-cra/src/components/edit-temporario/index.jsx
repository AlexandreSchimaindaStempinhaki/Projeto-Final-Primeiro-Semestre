import React, { useState, useEffect } from 'react';

import { Sobreposicao, Container, BotaoContainer, Botao } from './style';
import { Titulo, TextEmail, TextEmail as TextSenha, SubNome } from '../credenciais-login/style';
import { TextNome } from '../credenciais-cadastro/style';

export default function EditData({ aberto, fechado, salvar, dataInicial }) {
    const [formatarData, setFormatarData] = useState(dataInicial || { 'name': "", 'email': "", 'password': "" });

    useEffect(() => {
        if(dataInicial) {
            setFormatarData(dataInicial);
        }
    }, [dataInicial])

    const atualizarCampos = (e) => {
        setFormatarData({ ...formatarData, [e.target.name]: e.target.value })
    }

    const salvarData = () => {
        salvar(formatarData);
        fechado();
    }

    if (!aberto) return null;


    return (
        <Sobreposicao>
            <Container>
                <Titulo>
                    Editar
                </Titulo>

                <SubNome>Nome</SubNome>
                <TextNome id="nome" name="nome" value={formatarData.name}
                    onChange={atualizarCampos} />

                <SubNome>Email</SubNome>
                <TextEmail id="email" name="email" value={formatarData.email}
                    onChange={atualizarCampos} />

                <SubNome>Senha</SubNome>
                <TextSenha id="senha" name="senha" placeholder='Mínimo de 6 caracteres' value={formatarData.password}
                    onChange={atualizarCampos} />

                <BotaoContainer>
                    <Botao onClick={fechado}>Cancelar</Botao>
                    <Botao variant = "confirm" onClick={salvarData}>Salvar</Botao>
                </BotaoContainer>
            </Container>
        </Sobreposicao>
    )
}
