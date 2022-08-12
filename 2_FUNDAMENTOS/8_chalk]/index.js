//chalk possibilita mudar cor das letras e fundo
const chalk = require('chalk')

const nota = 1
if (nota >= 7) {
    console.log(chalk.green('Parabéns, você está aprovado!'));
} else {
    console.log(chalk.bgRed.blackBright('Reprovado!'));
}

