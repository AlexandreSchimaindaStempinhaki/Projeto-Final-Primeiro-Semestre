import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Curso from '#models/curso'

export default class extends BaseSeeder {
  async run() {
    await Curso.createMany([
      {
        nome: 'Técnico em Informática',
        duracao: 4,
      },
      {
        nome: 'Técnico em Mecânica',
        duracao: 2,
      },
    ])
  }
}