import express from "express";
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 3000

const basePath = path.join(__dirname, 'templates')

//criação do middleware, checagem de autenticação de usuário.
//utilizando authStatus consigo determinar se o usuário está autenticado ou não, nesse caso simular atraves do true que o usuário está logado.
// o next é necessário para podermos prosseguir a aplicação
const checkAuth = (req, res, next) => {
    req.authStatus = false;

    if (req.authStatus) {
        console.log('Está logado, pode continuar');
        next();
    } else {
        console.log('Não está logado, faça login para continuar');
        next();
    }
}

//usando o middleware criado. use é um método  do express. dessa forma toda requisição enviada ao sistema vai ativar o middleware
app.use(checkAuth)



app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})


app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})
