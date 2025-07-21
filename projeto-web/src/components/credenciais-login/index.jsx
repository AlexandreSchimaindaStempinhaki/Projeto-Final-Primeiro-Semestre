import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { 
    Container, Titulo, Dados, SubNome, TextEmail, 
    TextSenha, SenhaPerdida, BotaoLogar, Cadastrar, LoginsAlternativos
    } from './style';

import Google from '../../../public/images/google.png';
import Apple from '../../../public/images/apple.png';
import Facebook from '../../../public/images/facebook.png';


export default function CredenciaisLogin(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    return (
        <Container>
            <Titulo>LOGIN</Titulo>
            <Dados>
                <SubNome>Email</SubNome>
                <TextEmail id = "email" name = "email" placeholder value = {email}
                onChange = {(e => setEmail(e.target.value))}/>

                <SubNome>Senha</SubNome>
                <TextSenha id = "senha" name = "senha" value = {senha}
                onChange = {(e => setSenha(e.target.value))}/>

                <SenhaPerdida onClick={() => navigate('/senha')}>Esqueceu sua senha?</SenhaPerdida>
                <BotaoLogar onClick={() => navigate('/produtos')}/>
                <Cadastrar onClick={() => navigate('/cadastro')}>Não tem conta? Faça seu cadastro clicando aqui!</Cadastrar>

                <LoginsAlternativos> <img src = {Google}/> Continuar com o Google </LoginsAlternativos>
                <LoginsAlternativos> <img src = {Apple}/> Continuar com a Apple </LoginsAlternativos>
                <LoginsAlternativos> <img src = {Facebook}/> Continuar com o Facebook </LoginsAlternativos>
            </Dados>
        </Container>
    )
}