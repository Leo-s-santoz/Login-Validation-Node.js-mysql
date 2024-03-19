const Sequelize = require("sequelize");
//conexão com o banco
const sequelize = new Sequelize("Cadastros", "root", "asQW12!@", {
    host: "localhost",
    dialect: "mysql"
});

//teste para saber se a conexão com o bd funcionou
sequelize.authenticate().then(function(){
    console.log("### Conectado ao banco ###")
}).catch(function(erro){
    console.log("Falha ao conectar: "+erro)
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}