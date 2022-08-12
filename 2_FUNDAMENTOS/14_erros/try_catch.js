const x = 10
// se não tivessemos o try catch o erro gerado seria destrutivo, ou seja, encerraria o programa.
//Com o tratamento, conseguimos mostrar o erro e transmitir um retorno ao usuário

try {
    x = 2
} catch (err) {
    console.log(`Erro: ${err}`);
}