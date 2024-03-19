const db = require('../db')

const Post = db.sequelize.define('usuarios',{
    nome: {
        type: db.Sequelize.STRING(50)
    },
    email: {
        type: db.Sequelize.STRING(40)
    },
    password: {
        type: db.Sequelize.STRING
    }
})

//Post.sync({force: true})
module.exports = Post