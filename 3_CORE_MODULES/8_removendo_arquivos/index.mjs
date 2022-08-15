import fs from 'fs';

//unlink é utilizado para remover arquivos. function err para tratar possiveis erros.
fs.unlink('arquivo.txt', function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Arquivo removido!')

});
//o erro vai acontecer se não existirem arquivos no diretorio para serem removidos.
