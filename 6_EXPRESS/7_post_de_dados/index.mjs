import express from "express";
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 3000


//ler o body. Usando os app.use com o req.body estipulado em  app.post
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())



const basePath = path.join(__dirname, 'templates')

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

//post envia dados
app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);
    res.sendFile(`${basePath}/userform.html`)

})

//criando rotas, manten-se todas as rotas subsequentes em cima do users/:
app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário ${id}`)

    res.sendFile(`${basePath}/users.html`)
})







app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})


app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})
