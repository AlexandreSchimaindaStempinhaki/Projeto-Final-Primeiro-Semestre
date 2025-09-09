// Rotas para CRUD

/* 
router.get('/courses', '#controllers/courses_controller.index')
router.get('/courses/:id', '#controllers/courses_controller.show')
router.post('/courses', '#controllers/courses_controller.store')
router.put('/courses/:id', '#controllers/courses_controller.update')
router.delete('/courses/:id', '#controllers/courses_controller.destroy')
*/

// Ou apenas

import router from '@adonisjs/core/services/router'

const CoursesController = () => import('#controllers/courses_controller')
router.resource('courses', CoursesController)

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
