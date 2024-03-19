const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const Post = require('./modules/Post')

//bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.use(express.static("./"));
app.post('/add', function(req, res){
    Post.create({
        nome: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(function(){
        res.send("Post criado com sucesso")
    }).catch(function(erro){
        res.send("Houve um erro: "+erro)
    })
})



//definida a porta do localhost
app.listen(8081, function(){console.log("### Servidor rodando ###");});