import Tabela from '../tabela';

import { columnsVendas, keysVendas, dataVendas } from '../dados-ficticios';

export default function TabelaVendas(){
    return(
        <Tabela 
        columns = {columnsVendas}
        keys = {keysVendas}
        data = {dataVendas}
        type = 'vendas'
        />
    )
}