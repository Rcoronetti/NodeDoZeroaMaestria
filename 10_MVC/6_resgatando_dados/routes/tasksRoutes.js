const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')


//criando rotas
router.get('/add', TaskController.createTask) // rota add


router.post('/add', TaskController.createTaskSave) //rota do tipo posto para criar as tarefas.
router.get('/', TaskController.showTasks) // rota barra

module.exports = router