import { useState, useEffect } from 'react';
import Tabela from '../tabela';

// import { columnsProdutos keysProdutos } from '../dados-ficticios';

import Client from '../../api/client';


export default function TabelaProdutos(props) {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)

    function fetchData() {

        setLoad(true)
        setTimeout(() => {
            
            Client.get('users').then(res => {
                const users = res.data
                setData(users)  
            })
            .catch(function(error) {
                console.log(error)
            })
            .finally( () => {
                setLoad(false)
            })

        }, 1000)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <Tabela
            columns={['Id', 'Nome', 'Email', 'Senha', 'Opções']}
            keys={['id', 'name', 'email', 'password']}
            data={data}
            type = 'produtos'
            resource = 'users'
        />
    )
}