//assíncrona = quando o código continua progredindo e em um ponto futuro obtém a resposta da execução assíncrona.
import fs from 'fs'

console.log('inicio');
//método assincrono, não depende de uma sequência para execução do programa
fs.writeFile('arquivo.txt', 'oi', function (err) {
    setTimeout(function () {
        console.log('Arquivo criado!');
    }, 1000)
})

console.log('fim');