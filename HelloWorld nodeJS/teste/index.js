const express = require("express")

const app = express()

const handlebars = require('express-handlebars')

//config
    //Templade Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //Conexão com o banco de
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '131216',{
    host: "localhost",
    dialect: "mysql"

})

//Rotas
app.get('/cad', function(req, res){
    res.render('formulario')
})

app.listen(8080, function() {
    console.log('Server online!')
})