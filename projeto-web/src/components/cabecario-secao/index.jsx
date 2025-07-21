import { Cabecario, Option } from "./style"

export default function CabecarioSecao(props) {

    return (
        <Cabecario>
            {props.secoes.map((secao, id) => (
                <Option key={id}
                    className={props.selecionado === secao ? 'active' : ''}
                    onClick={() => props.setSelecionado(secao)}
                >{secao}</Option>
            ))
            }
        </Cabecario>
    )
}