Hora de interagir com o banco;
Ou seja, criar um vínculo entre um Controller e um Model;
Criaremos uma nova função para tratar os dados e enviaremos para o banco;
Como o sequelize tem alguns métodos prontos, o trabalho do nosso Model fica mais simples.


Criamos uma rota de POST para salvar os dados no banco (router.post('/add', TaskController.createTaskSave))
, ou seja, executamos a segunda tarefa do formulário. a primeira seria mostrar ele e depois processar os dados.
Os dados vieram da view(formulário), se comunicaram com o controler e ativou a função save.
Na função save   ...       (static createTaskSave(req, res) {
                            const task = {
                            title: req.body.title,
                            description: req.body.description,
                            done: false,)
formamos um objeto, ou seja, processamos os dados que vieram das requisições, depois passamos para o model.                          
