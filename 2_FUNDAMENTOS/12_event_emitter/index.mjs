//emissor de eventos.
//eventemitter é um módulo que facilita a comunicação entre objetos. está no centro da arquitetura  orientada a eventos assíncronos.
//objetos emissores emitem eventos nomeados que fazem com que ouvintes previamente registrados sejam chamados.

import EventEmitter from 'events'//importando o módulo
const eventEmitter = new EventEmitter()//instanciando um objeto que será usado. no caso eventEmitter

eventEmitter.on('start', () => {
    console.log('Durante');
})
console.log('Antes');
eventEmitter.emit('start')

console.log('Depois');