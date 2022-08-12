
const x = 10
const y = 'Algm texto'
const z = [1, 2]
const d = 'joao'
console.log(x, y, z);

//contagem de impressões
console.count(`O valor de x é : ${x}, contagem: `)
console.count(`O valor de x é : ${x}, contagem: `)
console.count(`O valor de x é : ${x}, contagem: `)
console.count(`O valor de x é : ${x}, contagem: `)

// variavel entre string 
console.log('O nome é %s, ele é programador', d);

// limpar o console. Aqui usamos o setimeOut para que tenha um delay de 2 segundos e após isso ocorrerá a limpeza.
setTimeout(() => {
    console.clear()
}, 2000)
