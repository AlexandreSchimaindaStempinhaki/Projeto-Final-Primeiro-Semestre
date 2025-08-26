import Tabela from '../tabela';

import { columnsProdutos, keysProdutos } from '../dados-ficticios';

export default function TabelaProdutos(props) {
    return (
        <Tabela
            columns={columnsProdutos}
            keys={keysProdutos}
            data={props.dataFiltrada}
            type = 'produtos'
        />
    )
}