import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

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

// Rotas de autenticação
router
  .group(() => {
    // Rotas públicas
    router.post('/register', '#controllers/auth_controller.register')
    router.post('/login', '#controllers/auth_controller.login')

    // Rotas protegidas
    router.post('/logout', '#controllers/auth_controller.logout').use(middleware.auth())

    router.get('/me', '#controllers/auth_controller.me').use(middleware.auth())

    router.get('/tokens', '#controllers/auth_controller.tokens').use(middleware.auth())

    router.post('/tokens', '#controllers/auth_controller.createToken').use(middleware.auth())
  })
  .prefix('/auth')
