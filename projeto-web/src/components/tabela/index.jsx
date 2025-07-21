import { Container, SubContainer, ComponenteTabela, Th, Td, Linha, BotaoAcao } from './style';

import ImagemInfo from '../../../public/images/info.png'
import ImagemEdit from '../../../public/images/edit.png'
import ImagemDelete from '../../../public/images/delete.png'


export default function Tabela(props){
    return (
        <Container>
            <SubContainer>
                <ComponenteTabela>
                    <thead>
                        <tr>
                            {
                                props.columns.map((col, id) => (
                                    <Th key = {id} className = {`coluna-${id}`}>{col}</Th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map((row, idl) => (
                                <Linha key = {idl} isEven={idl % 2 === 0}>
                                    {
                                        props.keys.map((col, idc) => (
                                            <Td key = {idc} className = {`coluna-${idc}`}>{row[col]}</Td>
                                        ))
                                    }
                                     <Td>
                                        <BotaoAcao src = {ImagemInfo}/>
                                        {
                                            ((props.type === 'vendas' && row.status === 'Pendente') || props.type === 'produtos') && (
                                                <span>
                                                    <BotaoAcao src = {ImagemEdit}/>
                                                    <BotaoAcao src = {ImagemDelete}/>
                                                </span>
                                            )
                                        }
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