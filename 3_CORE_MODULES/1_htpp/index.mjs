//importar o http para possibilitar criar um servidor
import http from 'http'
// definindo porta
const port = 3000
//criando servidor com o méodo createServer. As requisição recebidas serão sermpre as mesmas (req, res) requisition e response.
const server = http.createServer((req, res) => {
    //res.write estamos escrevendo uma resposta do usuário
    res.write('Oi, HTTP')
    //finaliznado resposta. Caso contrário ela vai rodar eternamente
    res.end()
})
//escutando a porta
server.listen(port, () => {
    //mensagem de callback para mostrar que a conexão está ok.
    console.log(`Servido rodando na porta: ${port}`);
})