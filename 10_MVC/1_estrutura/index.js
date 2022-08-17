const express = require('express')// importanto express
const exphbs = require('express-handlebars') // importando handlebars

const app = express() // instãnciando express na variável app

const conn = require('./db/conn')//instânciando conexão na variável conn

app.engine('handlebars', exphbs.engine())// definindo a template engine com handlebars e invocandoo exphbs para configuração
app.set('view engine', 'handlebars') // trazendo a view engine com handlebars que vai possibilitar as configurações via handlebars para o projeto


//criando middleware para poder ler o que vem no corpo da requisição
app.use(
    express.urlencoded({ // informa ao express qual biblioteca utilzar para fazer o parsing do conteúdo das requisições que ele recebe.
        extended: true // extended true utiliza a biblioteca qs (permitindo o aninhamento de objetos, formato que trabalho o JSON)
    })
)

//middleware para ler o json
app.use(express.json())

//middleware para entregar função estática, passando o nome do diretório que contem os ativos.
app.use(express.static('public'))


app.listen(3000)