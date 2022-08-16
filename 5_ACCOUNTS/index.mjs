//modulos externos
import inquirer from "inquirer";
import chalk from 'chalk'

//modulos internos
import fs from 'fs'

operation()

function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Transferir',
            'Sair'
        ],
    },
        //esse then seria a solução das escolhas do usuário. 
        //recebemos uma resposta(answer) e criamos uma função baseada na resposta.
    ]).then((answer) => {
        //pegar a ação do usuário com [action], por q é um array de perguntas então teremos um array de respostas.
        const action = answer['action']

        //se a ação for criar conta, então entramos na função criar conta.
        if (action === 'Criar conta') {
            createAccount()

        } else if (action === 'Depositar') {
            deposit()


        } else if (action === 'Consultar saldo') {
            getAccountBalance()


        } else if (action === 'Sacar') {
            withdraw()


        } else if (action === 'Transferir') {
            transfer()


        } else if (action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
            process.exit()
        }

        //aqui vamos ver a escolha do usuário.
        //console.log(action);
    })
        // o catch para pegarmos um eventual erro..
        .catch(err => console.log(err))
}

//create an account
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso Banco!'))
    console.log(chalk.green('Defina as opçoes da sua conta a seguir'))

    buildAccount()
    return
}
//construindo a conta
function buildAccount() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'digite um nome para sua conta: '

        //recebendo a resposta.
    }]).then((answer) => {
        const accountName = answer['accountName']
        console.info(accountName)

        //Criar banco de dados das contas
        //verificar se existe diretório, caso contrário criar.
        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }
        //validação de criação de conta, verificar se a mesma já está criada.
        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))

            //inicia novo ciclo na criação da conta, o usuário vai escolher novo nome para conta.
            buildAccount()
            return

        }// escrevendo arquivo já criado e dando um valor para o mesmo, no caso balance 0
        fs.writeFileSync(
            `accounts/${accountName}.json`,
            '{ "balance": 0 }',

            //evidenciando erro se tiver.
            function (err) {
                console.log((err))
            })

        console.log(chalk.green('Parabéns a sua conta foi criada!'));

        operation()

    })
        .catch(err => console.log(err))

}

//add an amount to user account
function deposit() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
        .then((answer) => {
            const accountName = answer['accountName']

            // verificando se conta existe
            if (!checkAccount(accountName)) {
                return deposit()
            }


            inquirer.prompt([
                {
                    name: 'amount',
                    message: 'Quanto você deseja depositar?',

                }//acessando o array qyue vem de respostas
            ]).then((answer) => {
                const amount = answer['amount']

                // add an amount
                addAmount(accountName, amount)
                operation()


            }).catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}


//verifica se a conta existe
function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe... tente novamente!'))
        return false
    }
    return true
}
//aqui consigo pegar a conta em objeto
function addAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    //se nao tiver nada pra depositar.
    console.log(accountData);
    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return operation()
    }

    //atribuindo valor
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    //salvand0 valor em um arquivo
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        //transformando json em texto
        JSON.stringify(accountData),
        function (err) {
            console.log(err);
        },
    )
    console.log(chalk.green(`Foi depositado o valor de R$:${amount} na sua conta!`))


}
//recebendo o arquivo json em utf-8, para leitura, e retornando json de texto para json.
function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })
    return JSON.parse(accountJSON)
}

//withdraw an amoun for user account
function withdraw() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }
    ]).then((answer) => {
        const accountName = answer['accountName']

        if (!checkAccount(accountName)) {
            return withdraw()
        }
        inquirer.prompt([{
            name: 'amount',
            message: 'Quanto você deseja sacar?'

        }
        ]).then((answer) => {
            const amount = answer['amount']
            removeAmount(accountName, amount)


        }).catch((err) => console.log(err))

    }).catch((err) => console.log(err))
}

function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente!'));
        return operation()
    }

    if (accountData.balance < amount) {
        console.log(chalk.bgRed.black('Valor indisponível!'))
        return operation()

    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        },
    )
    console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta!`))
    operation()
}


//show account balance
function getAccountBalance() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'

    }
    ]).then((answer) => {
        const accountName = answer['accountName']

        //verify is account exists
        if (!checkAccount(accountName)) {
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)

        console.log(chalk.bgBlue.black(
            `Olá, o saldo da sua conta é de R$${accountData.balance}`,
        ))
        operation()
    }).catch(err => console.log(err))
}

//transfer an amount between accounts
function transfer() {
    //conta de origem
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da conta de origem?'

        }
    ]).then((answer) => {
        const accountName = answer['accountName']

        // verificando se conta origem existe
        if (!checkAccount(accountName)) {
            return transfer()
        }

        //conta de destino
        inquirer.prompt([
            {
                name: 'accountNameDestiny',
                message: 'Qual a conta de destino?'
            }
        ]).then((answer) => {
            const accountNameDestiny = answer['accountNameDestiny']

            //verificando se conta  destino existe
            if (!checkAccount(accountNameDestiny)) {
                return transfer()
            }

            inquirer.prompt([
                {
                    name: 'amount',
                    message: 'Quanto você deseja depositar?',

                }//acessando o array qyue vem de respostas
            ]).then((answer) => {
                const amount = answer['amount']
                const accountData = getAccount(accountName)

                //remov an amount from origin
                removeAmount(accountName, amount)

                if (accountData.balance >= amount) {

                    addAmount(accountNameDestiny, amount)

                }



            }).catch(err => console.log(err))

        }).catch((err) => console.log(err))
    }).catch((err) => console.log(err))

}




