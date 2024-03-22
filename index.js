const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const Cad = require('./modules/Cad')
const genetateRandomSalt = require('./modules/generateRandomSalt')
//bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//rotas
app.use(express.static("./"));

//rota de cadastro
let salt = ''
app.post('/add', function(req, res){
    Cad.create({
        name: req.body.name,
        email: req.body.email,
        salt: salt = genetateRandomSalt(),
        password: salt + req.body.password
    }).catch(function(erro){
        res.send("Houve um erro: "+erro)
    })
})

//rota de login
app.post('/login', async (req, res) => {
    try {
      // Buscar o usuário pelo email fornecido
      const cadastro = await Cad.findOne({ where: { email: req.body.email } });
    console.log("cadastro", cadastro)
      if (cadastro) {
        // Comparar a senha fornecida com a senha armazenada no banco de dados
        if (cadastro.password == req.body.password) {
          // Senha válida, login bem-sucedido
          console.log("comp", cadastro.password == req.body.password)
          res.status(200).send("Login bem-sucedido!")
        } else {
          // Senha inválida
          const error = new Error("Senha invalida")
          res.status(401).json({error: error.message});
        }
      } else {
        return res.status(404).send("Usuário não encontrado");
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return res.status(500).send("Erro interno do servidor");
    }
  });


//definida a porta do localhost
app.listen(8081, function(){console.log("### Servidor rodando ###");});