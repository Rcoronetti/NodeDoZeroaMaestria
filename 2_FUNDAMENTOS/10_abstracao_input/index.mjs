import inquirer from 'inquirer';

//esse método é similar ao redline.question mas tem a vantagem de trabalhar com promisses e ser sequêncial.
inquirer.prompt([{
    name: 'p1',
    message: 'Qual a primeira nota',
},
{
    name: 'p2',
    message: 'Qual a segunda nota?'
},
    //quando temos uma promisse, existem dois métodos que podemos utilizar, o then e o cath.
    //o cath serve para imprimir algum erro se o código der algo errado.
    //Se está tudo certo ele irá par ao then!Como se disse-se, -esta tudo certo então...
]).then((answears) => {
    console.log(answears)
    const media = (parseFloat(answears.p1) + parseFloat(answears.p2)) / 2
    console.log(`a média é ${media}`);
}
).catch(err => console.log(err))