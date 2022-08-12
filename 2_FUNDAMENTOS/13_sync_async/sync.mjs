//sincrona = quando o código espera ser totalmente executado para proseguir;
import fs from 'fs'

console.log('inicio');
//método sincrono, eu dependo da execução desse arquivo para dar continuidade ao programa.
fs.writeFileSync('arquivo.txt', 'oi')

console.log('fim');