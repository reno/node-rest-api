const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')

const port = process.env.PORT || 3001

// Iniciando o app
const app = express()
app.use(express.json())
app.use(cors())

// Iniciando o BD
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true}
);
requireDir('./src/models/')

// Rotas
app.use('/', require('./src/routes'))

app.listen(port, () => console.log(`server started on port ${port}; ` +
  'press Ctrl-C to terminate...'))