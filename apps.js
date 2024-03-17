const express = require("express");
const app = express();

app.use(express.static(__dirname + '/cadastro'));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/cadastro/index.html");
});

const Sequelize = require("sequelize")
const sequelize = new Sequelize("sistemaDeCadastro", "root", "#Leo_5921", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado")
}).catch(function(erro){
    console.log("Falha ao conectar: "+erro)
})

app.listen(8081, function(){console.log("servidor rodando");});