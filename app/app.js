const express = require('express')
const userRoutes = require('./routes/userRoutes')
const app = express()

app.use('express.json()')//para interpretar o JSON na requisição
app.use('.api', userRoutes)

const PORT = process.conf.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}')
})