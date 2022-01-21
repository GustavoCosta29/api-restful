const express = require('express')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()


// conexão com o banco de dados
db.connect()

// habilita o server a receber os dados via JSON 
app.use(express.json())


// definindo rotas
app.use('/api', routes)





// executando o servidor
const port = process.env.port || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))
