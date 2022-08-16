import express from "express";

//variável para executar o express
const app = express()
//definindo porta em váriável de ambiente
const port = 3000

// criando rota, método get representa o verbo http. Nada mais é que o usuário vizualizar a página.
//2 argumentos, primeiro argumento, a rota e o segundo argumento uma requisição e resposta em função anômima.
//a requisição serve para receber um dado, por exemplo um formulário enviado pelo usuário.
// a resposta é o que vai ser enviado ao usuário. com método send.
app.get('/', (req, res) => {
    res.send('Ola,mundo!')
})

//listen na porta escolhida, com uma mensagem para quem executou o servidor saber que a aplicação está rodando.
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})
