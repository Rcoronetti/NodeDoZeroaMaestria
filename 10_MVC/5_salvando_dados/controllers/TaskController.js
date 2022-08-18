//importando model
const Task = require('../models/Task')


//exportando classe
module.exports = class TaskController {
    static createTask(req, res) { //usando metodo statico para não precisar instânciar o controller.
        res.render('tasks/create') //renderizando view
    }
    static showTasks(req, res) {
        res.render('tasks/all')
    }

    static createTaskSave(req, res) { //objeto será salvo no banco de dados
        const task = {          // trazendo os objetos conforme models
            title: req.body.title,
            description: req.body.description,
            done: false  // done não possui valor vindo do body. recebe false por q a tarefa inicia como false, como incompleta.

        }
        Task.create(task) // Faz com que ative o model, solicite o model do controller pra fazer uma interação com o banco.
            .then(res.redirect('/tasks'))// redirecionando pra view de tasks.
            .catch((err) => console.log())

    }
}