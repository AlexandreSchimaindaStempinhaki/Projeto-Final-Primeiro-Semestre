import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { 
    Container, Titulo, Dados, Nome, TextEmail, 
    TextSenha, SenhaPerdida, BotaoLogar, Cadastrar, LoginsAlternativos
    } from './style';

import Google from '../../images/google.png';
import Apple from '../../images/apple.png';
import Facebook from '../../images/facebook.png';


export default function Credenciais(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    return (
        <Container>
            <Titulo>LOGIN</Titulo>
            <Dados>
                <Nome>Email</Nome>
                <TextEmail id = "email" name = "email" placeholder value = {email}
                onChange = {(e => setEmail(e.target.value))}/>

                <Nome>Senha</Nome>
                <TextSenha id = "senha" name = "senha" value = {senha}
                onChange = {(e => setSenha(e.target.value))}/>

                <SenhaPerdida>Esqueçeu sua senha?</SenhaPerdida>
                <BotaoLogar/>
                <Cadastrar onClick={() => navigate('/cadastro')}>Não tem conta? Faça seu cadastro clicando aqui!</Cadastrar>

                <LoginsAlternativos> <img src = {Google}/> Continuar com o Google </LoginsAlternativos>
                <LoginsAlternativos> <img src = {Apple}/> Continuar com a Apple </LoginsAlternativos>
                <LoginsAlternativos> <img src = {Facebook}/> Continuar com o Facebook </LoginsAlternativos>
            </Dados>
        </Container>
    )
}