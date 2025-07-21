import { useNavigate, useLocation } from 'react-router';
import { Container, NavigationItem, Logout, Logo } from './style';

import ImagemLogo from '../../../public/images/logo.png'

export default function BarraNavegacao(){

    const navigate = useNavigate();
    const location = useLocation();

    const ativo = location.pathname.includes('/produtos') ? 'produtos' :
                  location.pathname.includes('/vendas') ? 'venda' : '';

    return (
        <Container>            
            <NavigationItem
            className = {ativo === 'produtos' ? 'active' : ''}
            onClick={() => navigate('/produtos')}>
                Produtos
            </NavigationItem>

            <NavigationItem
            className = {ativo === 'venda' ? 'active' : ''}
            onClick={() => navigate('/vendas')}>
                Vendas
            </NavigationItem>

            
            <Logout onClick={() => navigate('/')}/>
            <Logo src = {ImagemLogo}/>
        </Container>
    )
}