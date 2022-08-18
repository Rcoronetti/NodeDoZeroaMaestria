const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')


//criando rotas
router.get('/add', TaskController.createTask) // rota add
router.get('/', TaskController.showTasks) // rota barra

module.exports = router