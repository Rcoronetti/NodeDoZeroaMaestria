import fs from 'fs'

//rename irá realizar a renomeação do arquivo. ordem de sintaxe: primeiro arquivo antigo, depois novo arquivo.
fs.rename('arquivo.txt', 'novoarquivo.txt', function (err) {

    if (err) {
        console.log(err)
        return
    }
    console.log('Arquivo renomeado!');
})