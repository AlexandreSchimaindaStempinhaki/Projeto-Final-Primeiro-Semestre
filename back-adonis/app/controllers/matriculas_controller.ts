import type { HttpContext } from '@adonisjs/core/http'
import Matricula from '#models/matricula'
import { createMatricula } from '#validators/matricula'

export default class MatriculasController {
  /**
   * List all matriculas
   */
  public async index({ response }: HttpContext) {
    try {
      const matriculas = await Matricula.query().preload('aluno').preload('disciplina')

      return response.status(200).json({
        message: 'OK',
        data: matriculas,
      })
    } catch (error) {
      return response.status(500).json({
        message: 'ERROR',
      })
    }
  }

  /**
   * Create a new matricula
   */
  public async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createMatricula)

    try {
      const matricula = await Matricula.create(payload)

      return response.status(201).json({
        message: 'OK',
        data: matricula,
      })
    } catch (error) {
      return response.status(500).json({
        message: 'ERROR',
      })
    }
  }

  /**
   * Delete a matricula
   */
  public async destroy({ params, response }: HttpContext) {
    try {
      const matricula = await Matricula.query()
        .where('aluno_id', params.alunoId)
        .where('disciplina_id', params.disciplinaId)
        .firstOrFail()

      await matricula.delete()

      return response.status(200).json({
        message: 'OK',
      })
    } catch (error) {
      return response.status(500).json({
        message: 'ERROR',
      })
    }
  }

  // Se não for usar, pode remover:
  public async create({}: HttpContext) {}
  public async show({}: HttpContext) {}
  public async edit({}: HttpContext) {}
  public async update({}: HttpContext) {}
}
