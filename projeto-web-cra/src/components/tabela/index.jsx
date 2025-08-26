import { useNavigate } from 'react-router';
import { useState } from 'react';

import { Container, SubContainer, ComponenteTabela, Th, Td, Linha, BotaoAcao, QuadradoBotaoAcao, DivisaoIcons } from './style';

import ImagemInfo from '../../images-geral/images/info.png'
import ImagemEdit from '../../images-geral/images/edit.png'
import ImagemDelete from '../../images-geral/images/delete.png'
import Client from '../../api/client'

export default function Tabela(props) {

    const navigate = useNavigate();

    function remove(user) {

        const url = `${props.resource}/${user.id}`
        Client.delete(url).then(response => {})
            .catch(error => {
                console.error(error);
            });
        navigate(0);
    }


    return (
        <Container>
            <SubContainer>
                <ComponenteTabela>
                    <thead>
                        <tr>
                            {
                                props.columns.map((col, id) => (
                                    <Th key={id} className={`coluna-${id}`}>{col}</Th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map((row, idl) => (
                                <Linha key={idl} isEven={idl % 2 === 0}>
                                    {
                                        props.keys.map((col, idc) => (
                                            <Td key={idc} isEven={idl % 2 === 0} className={`coluna-${idc}`}>{row[col]}</Td>
                                        ))
                                    }
                                    <Td>
                                        <DivisaoIcons>
                                            <QuadradoBotaoAcao style={{ backgroundColor: '#008000' }}> <BotaoAcao src={ImagemInfo} alt="Ícone Info" /> </QuadradoBotaoAcao>
                                            {
                                                ((props.type === 'vendas' && row.status === 'Pendente') || props.type === 'produtos') && (
                                                    <span>
                                                        <QuadradoBotaoAcao style={{ backgroundColor: '#ffa500' }}> <BotaoAcao src={ImagemEdit} alt="Ícone Edit" /> </QuadradoBotaoAcao>
                                                        <QuadradoBotaoAcao style={{ backgroundColor: '#ff0000' }} onClick={() => remove(row)}> <BotaoAcao src={ImagemDelete} alt="Ícone Delete" /> </QuadradoBotaoAcao>
                                                    </span>
                                                )
                                            }
                                        </DivisaoIcons>
                                    </Td>
                                </Linha>
                            ))
                        }
                    </tbody>
                </ComponenteTabela>
            </SubContainer>
        </Container>
    )
}