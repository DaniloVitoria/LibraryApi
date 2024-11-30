

const express = require('express')
const sequelize = require('./config/database')
const livroRoutes = require('./src/routes/livroRoutes')
const usuarioRoutes = require('./src/routes/usuarioRoutes')
const emprestimoRoutes = require('./src/routes/emprestimoRoutes')
//const reportsRoutes = require('./routes/reportsRoutes');
const reportsRoutes = require('./src/routes/reportsRoutes');

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api/livros', livroRoutes)
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/emprestimos', emprestimoRoutes)
app.use('/reports', reportsRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
  })
})