import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Container, NavigationItem, Logout, Logo, Menu, SubMenu, SubMenuOption, SubMenuTexto, FecharMenu } from './style';

import ImagemLogo from '../../../public/images/logo.png';
import ImagemMenu from '../../../public/images/menu.png';
import ImagemFechar from '../../../public/images/fechar.png'

export default function BarraNavegacao() {

    const [menuAtivo, setMenuAtivo] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const ativo = location.pathname.includes('/produtos') ? 'produtos' :
        location.pathname.includes('/vendas') ? 'venda' : '';

    return (
        <Container>

            <Menu src={ImagemMenu} alt="Menu"
                onClick={() => setMenuAtivo(!menuAtivo)}
                desativado = {menuAtivo} />

            {menuAtivo && (
                <SubMenu>
                    <FecharMenu src={ImagemFechar} onClick={() => setMenuAtivo(false)} />
                    <SubMenuOption
                        onClick={() => navigate('/produtos')}>
                        <SubMenuTexto>
                            Produtos</SubMenuTexto>
                    </SubMenuOption>

                    <SubMenuOption
                        onClick={() => navigate('/vendas')}
                    >
                        <SubMenuTexto>Vendas</SubMenuTexto>
                    </SubMenuOption>
                </SubMenu>
            )}

            <NavigationItem
                className={ativo === 'produtos' ? 'active' : ''}
                onClick={() => navigate('/produtos')}>
                Produtos
            </NavigationItem>

            <NavigationItem
                className={ativo === 'venda' ? 'active' : ''}
                onClick={() => navigate('/vendas')}>
                Vendas
            </NavigationItem>

            <Logout onClick={() => navigate('/')} />
            <Logo src={ImagemLogo} />
        </Container>
    )
}