import path from 'path'

//arquivo normalmente oriundo do sistema
const customPath = '/relatorios/matheus/relatorio1.pdf'

//nome do diretorio
console.log(path.dirname(customPath));
// nome do arquivo
console.log(path.basename(customPath));
//nome da extensão
console.log(path.extname(customPath));
