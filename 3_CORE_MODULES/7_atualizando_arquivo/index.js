// O fluxo em if é:
// se não tivermos um NOMEM, mandamos um formulário pro usuário preencher.
// Se tivermos, salvamos o nome em um arquivo .txt


//importar o http para possibilitar criar um servidor
const http = require('http')
const fs = require('fs')



// definindo porta
const port = 3000

//criando servidor com o méodo createServer. As requisição recebidas serão sermpre as mesmas (req, res) requisition e response.
const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true)
    //pegando o nome pela url info
    const name = urlInfo.query.name

    //se eu não tiver um nome...
    if (!name) {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Contend-type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {

        //com r e n. garanto que uma quebra de linha será feita independente do sistema operacional. 
        // com , cada nome inserido terá uma vírgula no final, facilita se precisar usar um método para extrai-los por exemplo um array
        const nameNewFile = name + ',\r\n'

        //querro escrever em um arquivo quando digitado o nome, arquivo.txt. Escrevo name e acesso a função que posso executar algo quando o arquivo for escrito. executo o writeHead e dou status 302.
        //basicamente é: o usuário pode ficar digitanado seu nome quantas vezes quiser que fico mandando seu nome pra /, o sistema nao para.
        //Com o appendFile o arquivo é atualizado e são guardados todos os nomes digitados. observe que usamos o namenewline dentro do append e não o name.
        fs.appendFile("arquivo.txt", nameNewFile, function (err, data) {
            res.writeHead(302, {
                location: "/",
            })
            return res.end()
        })

    }

})


//escutando a porta
server.listen(port, () => {
    //mensagem de callback para mostrar que a conexão está ok.
    console.log(`Servido rodando na porta: ${port}`)
});