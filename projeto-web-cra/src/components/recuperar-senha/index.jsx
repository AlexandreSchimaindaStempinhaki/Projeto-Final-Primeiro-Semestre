import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { Container, Dados, SubNome, TextEmail, LoginsAlternativos } from '../credenciais-login/style';
import { Titulo, SubTitulo, BotaoEnviar } from './style';

import Google from '../../images-geral/images/google.png';
import Apple from '../../images-geral/images/apple.png';
import Facebook from '../../images-geral/images/facebook.png';

export default function RecuperarSenha() {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();


    return (
        <Container>
            <Titulo>Recuperar Senha</Titulo>
            <Dados>
                <SubTitulo>
                    Por favor, informe seu email abaixo. Enviaremos uma mensagem de email com as
                    instruções para redefinir sua senha.
                </SubTitulo>

                <SubNome>Email</SubNome>
                <TextEmail id="email" name="email" value={email}
                    onChange={(e => setEmail(e.target.value))} />
                <BotaoEnviar onClick={() => navigate('/')} />

                <SubTitulo>
                    O processo é extremamente rápido e fácil.
                </SubTitulo>


            </Dados>
        </Container>
    )
}