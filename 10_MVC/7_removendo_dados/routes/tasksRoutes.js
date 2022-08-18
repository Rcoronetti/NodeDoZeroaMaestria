const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')


//criando rotas
router.get('/add', TaskController.createTask)

router.post('/remove', TaskController.removeTasks) //<============ rota para remover dados
router.post('/add', TaskController.createTaskSave)
router.get('/', TaskController.showTasks)

module.exports = router