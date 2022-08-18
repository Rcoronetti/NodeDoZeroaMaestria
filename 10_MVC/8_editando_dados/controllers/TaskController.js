//importando model
const Task = require('../models/Task')


//exportando classe
module.exports = class TaskController {
    static createTask(req, res) {
        res.render('tasks/create')
    }

    static async createTaskSave(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false

        }
        await Task.create(task)
            .then(res.redirect('/tasks'))
            .catch((err) => console.log())

    }

    static async showTasks(req, res) {
        const tasks = await Task.findAll({ raw: true })

        res.render('tasks/all', { tasks })

    }

    static async removeTasks(req, res) { // <======================= remove tasks
        const id = req.body.id // vira um id pelo body
        await Task.destroy({ where: { id: id } }) // passamos um filtro para identificar o id a ser removido.
        res.redirect('/tasks') // redirecionamos pra home
    }


    static async editTasks(req, res) {// <================ Editando dado
        const id = req.params.id   //<===== vem da própria url, por isso é params
        const task = await Task.findOne({ where: { id: id }, raw: true })
        res.render('tasks/edit', { task })
    }
}