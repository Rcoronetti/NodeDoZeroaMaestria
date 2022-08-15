// O fluxo em if é:
// se não tivermos um NOMEM, mandamos um formulário pro usuário preencher.
// Se tivermos, salvamos o nome em um arquivo .txt


//importar o http para possibilitar criar um servidor
const http = require('http')
const fs = require('fs')
const url = require('url')



// definindo porta
const port = 3000

//criando servidor com o méodo createServer. As requisição recebidas serão sermpre as mesmas (req, res) requisition e response.
const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true)
    //pegando o nome pela url info
    const filename = q.pathname.substring(1)

    //se eu não tiver um nome...
    if (filename.includes('html')) {
        if (fs.existsSync(filename)) {
            fs.readFile(filename, function (err, data) {
                res.writeHead(200, { 'Contend-type': 'text/html' })
                res.write(data)
                return res.end()
            })
        } else {
            //404
            fs.readFile('404.html', function (err, data) {
                res.writeHead(404, { 'Contend-type': 'text/html' })
                res.write(data)
                return res.end()

            })
        }
    }
})





//escutando a porta
server.listen(port, () => {
    //mensagem de callback para mostrar que a conexão está ok.
    console.log(`Servido rodando na porta: ${port}`)
})