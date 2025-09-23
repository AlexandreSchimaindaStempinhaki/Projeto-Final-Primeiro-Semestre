import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Papel from '#models/papel'

export default class extends BaseSeeder {
  async run() {
    // Insere múltiplos registros na tabela Papel
    await Papel.createMany([
      {
        nome: 'Coordenador',
      },
      {
        nome: 'Professor',
      },
    ])
  }
}
