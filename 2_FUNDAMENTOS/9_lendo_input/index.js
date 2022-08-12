//configurações do node para receber e enviar dados para o usuário
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual sua linguam preferida? ', (language) => {
    if (language === 'Python') {
        console.log("Isso nem é linguagem!! :D");
    } else {
        console.log(`A minha linguagem preferida é ${language}`);
        readline.close()
    }

})
