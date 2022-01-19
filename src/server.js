const express = require('express')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()


// conexão com o banco de dados
db.connect()

// definindo rotas
app.use('/api', routes)


// habilita o server a receber os dados via POST    
app.use(express.urlencoded({ extended: true}))

// executando o servidor
const port = process.env.port || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))
