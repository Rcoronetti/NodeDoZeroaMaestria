const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const User = require('./models/user')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

//populando dados no banco  -- postando dados
app.post('/users/create', (req, res) => {
  const name = req.body.name
  const occupation = req.body.occupation
  const age = req.body.age
  const salary = req.body.salary
  let newsletter = req.body.newsletter

  if (newsletter === 'on') {
    newsletter = true
  } else {
    newsletter = false
  }

  console.log(req.body);

  User.create({ name, occupation, age, salary, newsletter })

  res.redirect('/')

})


app.get('/users/create', (req, res) => {
  res.render('adduser')
})


app.get('/', async (req, res) => {

// Inserindo Método para ler dados.
  const users = await User.findAll({ raw: true })
  console.log(users);

  res.render('home', { users: users })
})

// Criar tabelas e rodar o app
conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))