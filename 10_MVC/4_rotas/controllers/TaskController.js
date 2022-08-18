//importando model
const Task = require('../models/Task')


//exportando classe
module.exports = class TaskController {
    static createTask(eq, res) { //usando metodo statico para não precisar instânciar o controller.
        res.render('tasks/create') //renderizando view
    }
    static showTasks(req, res) {
        res.render('tasks/all')
    }
}