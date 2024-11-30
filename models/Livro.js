const { DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const Livro = sequelize.define('Livro', {
  id_livro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'livros',
  timestamps: false
})

module.exports = Livro