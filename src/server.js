const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()


// conexão com o banco de dados
db.connect()



const allowedorigins = [
    'http://127.0.0.1:5500',
    'http://www.casasbahia.com.br'
]

// permissao de acesso cors
app.use(cors({
    origin: function(origin, callback){
        let allowed = true

        if (!origin) allowed = true

        if (!allowedorigins.includes(origin)) allowed = false


        callback(null, allowed)
    }
}))

// habilita o server a receber os dados via JSON 
app.use(express.json())


// definindo rotas
app.use('/api', routes)





// executando o servidor
const port = process.env.port || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))
