//LENDO ARGUMENTOS NA LINHA DE COMANDO
//process.argv tras o executável do node, o arquivo em execução e o argumento inserido. tente o comando index.mjs nome=rafa
//na sequencia vamos separar os itens e tentar pegar somente o nome;
console.log(process.argv);

// usando método de slice pra resgatar o segundo índice ou seja, nome=Rafa
const args = process.argv.slice(2)
console.log(args);

//dividir o argumento com split para poder coletar somento o Rafa
const nome = args[0].split('=')[1];
console.log(nome);
