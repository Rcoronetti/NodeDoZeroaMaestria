const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const conn = require('./db/conn')
const user = require('./models/user')
const Address = require('./models/Address') // <========

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/', function (req, res) {
  user.findAll({ raw: true })
    .then((users) => {
      console.log(users)
      res.render('home', { users: users })
    })
    .catch((err) => console.log(err))
})

app.get('/users/create', function (req, res) {
  res.render('adduser')
})

app.post('/users/create', function (req, res) {
  const name = req.body.name
  const occupation = req.body.occupation
  const age = req.body.age
  const salary = req.body.salary
  let newsletter = req.body.newsletter

  if (newsletter === 'on') {
    newsletter = true
  }

  user.create({ name, occupation, age, salary, newsletter })
    .then(res.redirect('/'))
    .catch((err) => console.log(err))
})

app.get('/users/:id', function (req, res) {
  const id = req.params.id

  user.findOne({
    raw: true,
    where: {
      id: id,
    },
  })
    .then((user) => {
      console.log(user)
      res.render('userview', { user })
    })
    .catch((err) => console.log(err))
})

app.post('/users/delete/:id', function (req, res) {
  const id = req.params.id

  user.destroy({
    where: {
      id: id,
    },
  })
    .then((user) => {
      res.redirect('/')
    })
    .catch((err) => console.log(err))
})

app.get('/users/edit/:id', function (req, res) {
  const id = req.params.id

  user.findOne({
    raw: true,
    where: {
      id: id,
    },
  })
    .then((user) => {
      console.log(user)
      res.render('useredit', { user })
    })
    .catch((err) => console.log(err))
})

//UPDATE
app.post('/users/update', (req, res) => {
  const id = req.body.id
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

  const userData = {
    id,
    name,
    age,
    salary,
    occupation,
    newsletter,
  }

  console.log(req.body)
  console.log(userData)

  user.update(userData, {
    where: {
      id: id,
    },
  })
    .then((user) => {
      console.log(user)
      res.redirect('/')
    })
    .catch((err) => console.log(err))
})

//ADICIONANDO ROTAS  POST PARA ADD ENDEREÇO
app.post('/address/create', async (req, res) => {
  const UserId = req.body.UserId
  const street = req.body.street
  const number = req.body.number
  const city = req.body.city

  //criando objeto. dessa forma podemos passar somente o objeto para o método create, deixando o cod mais organizado.
  const address = {
    UserId,
    street,
    number,
    city,
  }
  await Address.create(address)

  res.redirect(`/users/edit/${UserId}`)

})



// Criar tabelas e rodar o app
conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))
