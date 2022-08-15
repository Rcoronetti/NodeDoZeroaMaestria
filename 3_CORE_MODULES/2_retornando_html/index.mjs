//importar o http para possibilitar criar um servidor
import http from 'http'
// definindo porta
const port = 3000
//criando servidor com o méodo createServer. As requisição recebidas serão sermpre as mesmas (req, res) requisition e response.
const server = http.createServer((req, res) => {
    //indica que a conexão foi bem sucedida
    res.statusCode = 200
    //tipo de conteudo passa a ser text/html
    res.setHeader('Contenty-Type', 'text/html')
    //texto que vai poder receber tags de html
    res.end('<h1>Olá, este é meu primeiro server com HTML!</h1><p>Testando atualização</p>')
})
//escutando a porta
server.listen(port, () => {
    //mensagem de callback para mostrar que a conexão está ok.
    console.log(`Servido rodando na porta: ${port}`)
});