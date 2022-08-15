import url from 'url'
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'
//url decomposta , utilizando o modulo url com o método URL. Instanciamos a importação e adicionamos um método pra ele.
const parsedUrl = new url.URL(address)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'))