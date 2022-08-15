//lodash atua diferentemente de outros pacotes globais, para usá-lo precisamos criar um link atraves do comando: npm link lodash.
import _ from 'lodash'

const arr = [1, 1, 2, 2, 2, 3, 3, 3, 5]
console.log(_.sortedUniq(arr));