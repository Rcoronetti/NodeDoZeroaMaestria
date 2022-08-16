import express from "express";

//por meio do modulo path conseguimos acessar o arquivo do diretorio base
import path from 'path'

//necessário para poder utilizar __dirname no escopo do ES5
import { fileURLToPath } from 'url';

// fileURLToPath retorna o nome do arquivo do código que é executado.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



//variável para executar o express
const app = express()
//definindo porta em váriável de ambiente
const port = 3000


//a pasta 3 é o base path, e queremos acessar  templates onde os htmls irão ficar.
//join irá fazer a junção do base path com o _dirname que é o diretório atual com templates que é a pasta criada.
const basePath = path.join(__dirname, 'templates')


//agora mandamos um senFile que envia resposta de um arquivo. dentro do sendFile especificamos o caminho do arquivo, juntando o basePath com o index.html
app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

//listen na porta escolhida, com uma mensagem para quem executou o servidor saber que a aplicação está rodando.
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})
