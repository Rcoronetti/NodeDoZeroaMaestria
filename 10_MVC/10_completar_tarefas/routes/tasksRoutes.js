const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')


//criando rotas
router.get('/add', TaskController.createTask)// <======= rota para criar tarefas
router.post('/add', TaskController.createTaskSave) // <==========  rota para salvar e enviar as tarefas criadas

router.post('/remove', TaskController.removeTasks) //<============ rota para remover tarefas

router.get('/', TaskController.showTasks) // <=========== rota para mostrar tarefas criadas

router.get('/edit/:id', TaskController.editTasks) // <================ rota para edição (id por q é um dado que vem do banco)
router.post('/edit', TaskController.editTasksPost) // <=========== criando rota para envio dos dados editados

router.post('/updatestatus', TaskController.toggleTaskStatus) //<========rota para alterar o status de concluido da tarefa!

module.exports = router