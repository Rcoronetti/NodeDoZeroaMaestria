//importando model
const Task = require('../models/Task')


//exportando classe
module.exports = class TaskController {
    static createTask(req, res) { // <========= CRIANDO TAREFA
        res.render('tasks/create')
    }


    static async createTaskSave(req, res) { //<=======SALVANDO TAREFA NO DB
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false

        }
        await Task.create(task)
            .then(res.redirect('/tasks'))
            .catch((err) => console.log(err))

    }




    static async showTasks(req, res) {//<=====MOSTRANDO TAREFAS CRIADAS
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



    static async editTasksPost(req, res) { //<=========== criando envio da edição dos dados
        const id = req.body.id  // recebendo id do post e criando novo objeto que esta no body.
        const task = {
            title: req.body.title,
            description: req.body.description
        }
        await Task.update(task, { where: { id: id } }) // <=== invocando o model, passando o objeto que eu quero e identificando a tarefa a ser atualizada
            .then(res.redirect('/tasks'))
            .catch((err) => console.log(err))
    }


    static async toggleTaskStatus(req, res) {
        const id = req.body.id

        console.log(req.body)

        const task = {
            done: req.body.done === '0' ? true : false,
        }

        console.log(task)

        await Task.update(task, { where: { id: id } })
            .then(res.redirect('/tasks'))
            .catch((err) => console.log())
    }



} 