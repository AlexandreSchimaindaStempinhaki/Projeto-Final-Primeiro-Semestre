import React, { useState } from 'react';
import { Container, NavigationItem, ImagemPerfil, NomeUsuario, Logout, Logo } from './style';

import ImagemLogo from '../../images/logo.png'
import User from '../../images/user.png'
export default function BarraNavegacao(){
    const [ativo, setAtivo] = useState('produtos');
    return (
        <Container>            
            <NavigationItem
            className = {ativo === 'produtos' ? 'active' : ''}
            onClick={() => setAtivo('produtos')}>
                Produtos
            </NavigationItem>

            <NavigationItem
            className = {ativo === 'venda' ? 'active' : ''}
            onClick={() => setAtivo('venda')}>
                Venda
            </NavigationItem>

            
            <Logout />
            <Logo src = {ImagemLogo}/>
        </Container>
    )
}