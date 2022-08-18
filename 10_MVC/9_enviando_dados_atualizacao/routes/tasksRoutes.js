const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')


//criando rotas
router.get('/add', TaskController.createTask)

router.post('/remove', TaskController.removeTasks) //<============ rota para remover dados
router.post('/add', TaskController.createTaskSave)
router.get('/', TaskController.showTasks)
router.get('/edit/:id', TaskController.editTasks) // <================ rota para edição id por q é um dado que vem do banco
router.post('/edit', TaskController.editTasksPost) // <=========== criando rota para envio dos dados editados

module.exports = router