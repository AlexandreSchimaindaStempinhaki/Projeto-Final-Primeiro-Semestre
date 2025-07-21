import React, { useState } from 'react';

import BarraPesquisa from '../barra-pesquisa'
import TabelaProdutos from '../tabela-produtos';
import { Container, Cabecario, Option } from './style';

export default function ContainerProdutos() {
    const [selecionado, setSelecionado] = useState('simples');

    return (
        <Container>
            <Cabecario>
                <Option
                    className={selecionado === 'simples' ? 'active' : ''}
                    onClick={() => setSelecionado('simples')}>
                    Vista Simples
                </Option>

                <Option
                    className={selecionado === 'detalhada' ? 'active' : ''}
                    onClick={() => setSelecionado('detalhada')}>
                    Vista Detalhada
                </Option>
            </Cabecario>

            <BarraPesquisa />
            <TabelaProdutos />
        </Container>
    )
}