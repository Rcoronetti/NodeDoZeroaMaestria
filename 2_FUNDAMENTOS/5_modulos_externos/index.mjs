//minimist possibilita pegar argumentos e extrai=los diretamente da linha de comando.
//Nesse exemplo estamos pegando o nome e a profissão, que são repassadas diretamente na linha de comando => node index.mjs --nome=Rafael
import minimist from 'minimist';
const args = minimist(process.argv.slice(2));
console.log(args);

const nome = args["nome"]
const profissao = args['profissao']
console.log(nome, profissao);
console.log(`O nome dele é ${nome} e sua profissão é ${profissao}`);
