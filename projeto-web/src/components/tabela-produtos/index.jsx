import Tabela from '../tabela';

export default function TabelaProdutos() {

    const columns = [
        'Nome', 'Quantidade', 'Preço', 'Marca', 'Opções'
    ];

    const keys = [
        'name', 'quantity', 'price', 'brand'
    ];

    const data = [
        { name: 'Notebook', quantity: 12, price: 'R$ 3.500,00', brand: 'Dell' },
        { name: 'Mouse', quantity: 50, price: 'R$ 120,00', brand: 'Logitech' },
        { name: 'Teclado', quantity: 30, price: 'R$ 250,00', brand: 'Redragon' },
        { name: 'Monitor', quantity: 20, price: 'R$ 800,00', brand: 'AOC' },
        { name: 'Headset', quantity: 25, price: 'R$ 350,00', brand: 'HyperX' },
        { name: 'Impressora', quantity: 10, price: 'R$ 1.200,00', brand: 'HP' },
        { name: 'Webcam', quantity: 15, price: 'R$ 220,00', brand: 'Logitech' },
        { name: 'Cadeira Gamer', quantity: 8, price: 'R$ 1.500,00', brand: 'ThunderX3' },
        { name: 'HD Externo', quantity: 18, price: 'R$ 400,00', brand: 'Seagate' },
        { name: 'Pen Drive', quantity: 60, price: 'R$ 45,00', brand: 'Kingston' },
        { name: 'Placa de Vídeo', quantity: 5, price: 'R$ 3.200,00', brand: 'NVIDIA' },
        { name: 'Processador', quantity: 9, price: 'R$ 1.800,00', brand: 'Intel' },
        { name: 'Fonte ATX', quantity: 11, price: 'R$ 600,00', brand: 'Corsair' },
        { name: 'Gabinete', quantity: 14, price: 'R$ 350,00', brand: 'Cooler Master' },
        { name: 'Memória RAM', quantity: 22, price: 'R$ 320,00', brand: 'Crucial' },
        { name: 'SSD', quantity: 16, price: 'R$ 500,00', brand: 'Samsung' },
        { name: 'Cabo HDMI', quantity: 40, price: 'R$ 30,00', brand: 'Multilaser' },
        { name: 'Adaptador USB', quantity: 35, price: 'R$ 25,00', brand: 'Ugreen' },
        { name: 'Switch Ethernet', quantity: 7, price: 'R$ 280,00', brand: 'TP-Link' },
        { name: 'Notebook Gamer', quantity: 4, price: 'R$ 7.200,00', brand: 'ASUS' }
    ];

    return (
        <Tabela
            columns={columns}
            keys={keys}
            data={data}
        />
    )
}