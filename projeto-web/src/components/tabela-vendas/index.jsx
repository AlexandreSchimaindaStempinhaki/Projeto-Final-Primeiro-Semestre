import Tabela from '../tabela';

import { columnsVendas, keysVendas, dataVendas } from '../dados-ficticios';

export default function TabelaVendas(props) {

    function converterDataBrasil(data){
        const [dia, mes, ano] = data.split('/');
        return new Date(ano, mes - 1, dia);
    }

    function converterParaNumero(numero){
        const numeroComPonto = numero.replace(',', '.');
        const numeroLimpo = numeroComPonto.replace(/[^\d.]/g, '');
        const numeroPerfeito = parseFloat(numeroLimpo);

        return numeroPerfeito;
    }

    function filtrarVendas(dados, filtroSelecionado, pesquisa){
        if(!pesquisa) return dados;

        if(filtroSelecionado === 'dataAnterior'){
            const dataDigitada = converterDataBrasil(pesquisa);

            return dados.filter(venda => {
                const dataVenda = converterDataBrasil(venda.saleDate);
                return dataVenda <= dataDigitada;
            });

        }

        if(filtroSelecionado === 'dataPosterior'){
            const dataDigitada = converterDataBrasil(pesquisa);

            return dados.filter(venda => {
                const dataVenda = converterDataBrasil(venda.saleDate);
                return dataVenda >= dataDigitada;
            })
        }

        if(filtroSelecionado === 'maisCaro') {
            const precoDigitado = converterParaNumero(pesquisa);
            return dados.filter(venda => {
                const ValorVenda = converterParaNumero(venda.totalAmount);
                return ValorVenda >= precoDigitado;
            })
        }
        if(filtroSelecionado === 'maisBarato') {
            const precoDigitado = converterParaNumero(pesquisa);
            return dados.filter(venda =>{
                const valorVenda = converterParaNumero(venda.totalAmount);
                return valorVenda <= precoDigitado;
            }  )
        }

        if(filtroSelecionado === 'status'){
            return dados.filter(venda => venda.status.toLowerCase().includes(pesquisa.toLowerCase()));
        }

        return dados;
    }

    const dadosFiltrados = filtrarVendas(dataVendas, props.filtroSelecionado, props.pesquisa);

    return (
        <Tabela
            columns={columnsVendas}
            keys={keysVendas}
            data={dadosFiltrados}
            type='vendas'
        />
    )
}