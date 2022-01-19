const express = require('express')

const routes = require('./routes')

const app = express()




// definindo rotas
app.use('/api', routes)
    

// habilita o server a receber os dados via POST    
app.use(express.urlencoded({ extended: true}))

// executando o servidor
const port = process.env.port || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))
