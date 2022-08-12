//criar um novo projeto que aceite pacotes externos
// instalar o inquirer e o chalk
// ultilizar o inquirer para receber o nome e idade de um usuario
// apresentar a resposta com fundo amarelo e texto PerformanceNavigationTiming
// inserir um tratamento para possivel erro no inquirer
import chalk from 'chalk'
import inquirer from 'inquirer'

inquirer.prompt([{
    name: 'p1',
    message: 'Qual o seu nome?',
},
{
    name: 'p2',
    message: 'Qual sua idade?'
}
]).then((answear) => {
    console.log(answear)
    const nome = answear.p1
    const idade = parseInt(answear.p2)
    console.log(chalk.bgYellowBright.black(`Seu nome é ${nome}, e sua idade é ${idade}`));
}
).catch((err) => console.log(err));
