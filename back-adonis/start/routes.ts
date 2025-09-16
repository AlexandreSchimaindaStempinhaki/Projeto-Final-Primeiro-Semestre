import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('cursos', '#controllers/cursos_controller')
router.resource('disciplinas', '#controllers/disciplinas_controller')
router.resource('alunos', '#controllers/alunos_controller')
router.resource('matriculas', '#controllers/matriculas_controller')
router.delete('matriculas/:alunoId/:disciplinaId', '#controllers/matriculas_controller.destroy')
