//importar o http para possibilitar criar um servidor
const http = require('http')


// definindo porta
const port = 3000

//criando servidor com o méodo createServer. As requisição recebidas serão sermpre as mesmas (req, res) requisition e response.
const server = http.createServer((req, res) => {

    //quando a requisição chegar, chamamos o modulo url e vamos parsear a url  que vem pela requisição, 
    const urlInfo = require('url').parse(req.url, true)

    //pegamos a urlInfo que ja está decomposta,  que vem no query parâmetros, e estamos buscando o parâmetro name
    const name = urlInfo.query.name

    //indica que a conexão foi bem sucedida
    res.statusCode = 200
    //tipo de conteudo passa a ser text/html
    res.setHeader('Contenty-Type', 'text/html')

    //Se nessa url nao vem nome, envio um formulario para o usuario preencher.
    if (!name) {
        res.end('<h1>Preencha o seu nome: </h1><form method="GET"><input type="text" name="name" /><input type="submit" value="Enviar" ></form>')

    } else {
        res.end(`<h1>Seja bem vindo ${name}</h1>`)

    }
})
//escutando a porta
server.listen(port, () => {
    //mensagem de callback para mostrar que a conexão está ok.
    console.log(`Servido rodando na porta: ${port}`)
});