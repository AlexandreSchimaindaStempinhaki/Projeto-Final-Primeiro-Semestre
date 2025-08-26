import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { Container, Titulo, Dados, SubNome, Cadastrar as Logar, TextEmail, TextSenha } from '../credenciais-login/style';
import { TextNome, BotaoCadastrar } from './style';
import Client from '../../api/client';

export default function Credenciais_Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmar, setSenhaConfirmar] = useState('');

    const navigate = useNavigate();

    function enviarDados(){
        const user = {name: nome, email: email, password: senha};

        Client.post('users', user).then(response => {
            console.log(response.data);
        })

        .catch(error => {
            console.error(error);
        });

        navigate('/produtos');
    }

    return (
        <Container>
            <Titulo>Cadastro</Titulo>
            <Dados>
                <SubNome>Nome</SubNome>
                <TextNome id="nome" name="nome" value={nome}
                    onChange={(e) => setNome(e.target.value)} />

                <SubNome>Email</SubNome>
                <TextEmail id="email" name="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <SubNome>Senha</SubNome>
                <TextSenha id="senha" name="senha" placeholder='Mínimo de 6 caracteres' value={senha}
                    onChange={(e) => setSenha(e.target.value)} />

                <SubNome>Confirme sua senha</SubNome>
                <TextSenha id="senhaConfirmar" name="senhaConfirmar" value={senhaConfirmar}
                    onChange={(e) => setSenhaConfirmar(e.target.value)} />

                <BotaoCadastrar onClick={() => enviarDados()} />
                <Logar onClick={() => navigate('/')}>Já tem uma conta? Logue clicando aqui</Logar>
            </Dados>
        </Container>
    )
}