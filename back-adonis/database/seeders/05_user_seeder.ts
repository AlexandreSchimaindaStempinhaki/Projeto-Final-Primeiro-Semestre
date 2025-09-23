import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  public async run() {
    // Insere múltiplos usuários na tabela User
    await User.createMany([
      {
        fullName: 'Gil Eduardo de Andrade',
        email: 'gil@gmail.com',
        password: '1234@5678',
        papel_id: 1,
      },
      {
        fullName: 'Manuel Araújo Castro',
        email: 'manuel@gmail.com',
        password: '1234@5678',
        papel_id: 2,
      },
    ])
  }
}
