//importar o http para possibilitar criar um servidor
const http = require('http')
const fs = require('fs')


// definindo porta
const port = 3000

//criando servidor com o méodo createServer. As requisição recebidas serão sermpre as mesmas (req, res) requisition e response.
const server = http.createServer((req, res) => {
    fs.readFile('mensagem.html', function (err, data) {
        res.writeHead(200, { 'Contend-type': 'text/html' })
        res.write(data)
        return res.end()
    })
})

//escutando a porta
server.listen(port, () => {
    //mensagem de callback para mostrar que a conexão está ok.
    console.log(`Servido rodando na porta: ${port}`)
});