import fs from 'fs'

//verificando se o diretório existe, se der falso entra no if.(diretório ainda não existe)
//existsSync, verificando se o diretorio existe no diretório atual, de forma sincrona.
if (!fs.existsSync('./minhapasta')) {
    console.log('Não existe')

    //criando diretório
    fs.mkdirSync('minhapasta')
    //verificando novamente se diretório existe
} else if (fs.existsSync('./minhapasta')) {
    console.log('Existe');
}




