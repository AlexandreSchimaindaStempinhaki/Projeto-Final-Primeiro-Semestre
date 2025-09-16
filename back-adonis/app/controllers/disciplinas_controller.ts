import Disciplina from '../models/disciplina.js'
import { createDisciplina, updateDisciplina } from '../validators/disciplina.js'

export default class DisciplinasController {
  async index({ response }: any) {
    try {
      const disciplinas = await Disciplina.query().preload('curso').preload('alunos')
      return response.status(200).json({ message: 'OK', data: disciplinas })
    } catch (error) {
      return response.status(500).json({ message: 'ERROR' })
    }
  }

  async store({ request, response }: any) {
    const payload = await request.validateUsing(createDisciplina)
    try {
      const disciplina = await Disciplina.create(payload)
      return response.status(201).json({ message: 'OK', data: disciplina })
    } catch (error) {
      return response.status(500).json({ message: 'ERROR' })
    }
  }

  async show({ params, response }: any) {
    try {
      const disciplina = await Disciplina.query()
        .where('id', params.id)
        .preload('curso')
        .preload('alunos')
        .firstOrFail()
      return response.status(200).json({ message: 'OK', data: disciplina })
    } catch (error) {
      return response.status(500).json({ message: 'ERROR' })
    }
  }

  async update({ params, request, response }: any) {
    const payload = await request.validateUsing(updateDisciplina)
    try {
      const disciplina = await Disciplina.findOrFail(params.id)
      disciplina.merge(payload)
      await disciplina.save()
      return response.status(200).json({ message: 'OK', data: disciplina })
    } catch (error) {
      return response.status(500).json({ message: 'ERROR' })
    }
  }

  async destroy({ params, response }: any) {
    try {
      const disciplina = await Disciplina.findOrFail(params.id)
      await disciplina.delete()
      return response.status(200).json({ message: 'OK' })
    } catch (error) {
      return response.status(500).json({ message: 'ERROR' })
    }
  }
}
