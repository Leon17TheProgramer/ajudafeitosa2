const express = require('express')
const exphbs = require('express-handlebars')
const sequelize = require('sequelize')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) =>{
    res.render('home')
})

app.get('/usuario', (req, res) =>{
    res.render('formUsuario')
})
app.get('/tarefa', (req, res) =>{
    res.render('formTarefa')
})

app.listen(3000, () =>{
    console.log('http://localhost:3000')
})