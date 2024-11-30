const Emprestimo = require('../models/Emprestimo')
const Usuario = require('../models/Usuario')
const Livro = require('../models/Livro')

exports.realizarEmprestimo = async (req, res) => {
  try {
    const { id_usuario, id_livro } = req.body
    
    // Verifica número de empréstimos ativos do usuário
    const emprestimosAtivos = await Emprestimo.count({
      where: {
        id_usuario,
        status: 'ATIVO'
      }
    })

    if (emprestimosAtivos >= 3) {
      return res.status(400).json({ 
        message: 'Usuário atingiu limite de empréstimos' 
      })
    }

    // Calcula data de devolução (15 dias)
    const dataEmprestimo = new Date()
    const dataDevolucao = new Date()
    dataDevolucao.setDate(dataEmprestimo.getDate() + 15)

    const emprestimo = await Emprestimo.create({
      id_usuario,
      id_livro,
      data_emprestimo: dataEmprestimo,
      data_devolucao_prevista: dataDevolucao,
      status: 'ATIVO'
    })

    res.status(201).json(emprestimo)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.realizarDevolucao = async (req, res) => {
  try {
    const { id } = req.params
    const emprestimo = await Emprestimo.findByPk(id)

    if (!emprestimo) {
      return res.status(404).json({ message: 'Empréstimo não encontrado' })
    }

    if (emprestimo.status === 'DEVOLVIDO') {
      return res.status(400).json({ message: 'Livro já devolvido' })
    }

    const dataDevolucaoReal = new Date()
    const status = dataDevolucaoReal > emprestimo.data_devolucao_prevista 
      ? 'ATRASADO' 
      : 'DEVOLVIDO'

    await emprestimo.update({
      data_devolucao_real: dataDevolucaoReal,
      status
    })

    res.json(emprestimo)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.listarEmprestimos = async (req, res) => {
  try {
    const emprestimos = await Emprestimo.findAll({
      include: [
        {
          model: Usuario,
          attributes: ['nome', 'email']
        },
        {
          model: Livro,
          attributes: ['titulo', 'autor']
        }
      ]
    })
    res.json(emprestimos)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.buscarEmprestimosUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params
    const emprestimos = await Emprestimo.findAll({
      where: { id_usuario },
      include: [
        {
          model: Livro,
          attributes: ['titulo', 'autor']
        }
      ]
    })
    res.json(emprestimos)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}