const { DataTypes } = require('sequelize')
const sequelize = require('../../config/database')
const Usuario = require('./Usuario')
const Livro = require('./Livro')

const Emprestimo = sequelize.define('Emprestimo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_livro: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  data_emprestimo: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  data_devolucao_prevista: {
    type: DataTypes.DATE,
    allowNull: false
  },
  data_devolucao_real: {
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.ENUM('ATIVO', 'DEVOLVIDO', 'ATRASADO'),
    defaultValue: 'ATIVO'
  }
}, {
  tableName: 'emprestimos',
  timestamps: false
})

Emprestimo.belongsTo(Usuario, { foreignKey: 'id_usuario' })
Emprestimo.belongsTo(Livro, { foreignKey: 'id_livro' })

module.exports = Emprestimo