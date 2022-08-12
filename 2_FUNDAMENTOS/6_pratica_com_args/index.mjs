//retirando e somando argumentos passado pela linha de comando usando minmist. comando: node index.mjs --a=5 --b=10

//externo
import minimist from 'minimist';


//interno
import soma from './soma.mjs'
const args = minimist(process.argv.slice(2));
console.log(args);
//convertendo os dois argumentos para inteiros
const a = parseInt(args["a"])
const b = parseInt(args["b"])
console.log(a, b);
soma(a, b)
