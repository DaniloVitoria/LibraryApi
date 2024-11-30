const Livro = require('../models/Livro')

exports.createLivro = async (req, res) => {
  try {
    const livro = await Livro.create(req.body)
    res.status(201).json(livro)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.getAllLivros = async (req, res) => {
  try {
    const livros = await Livro.findAll()
    res.json(livros)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getLivroById = async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id)
    if (!livro) return res.status(404).json({ message: 'Livro não encontrado' })
    res.json(livro)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.updateLivro = async (req, res) => {
  try {
    const [updated] = await Livro.update(req.body, {
      where: { id: req.params.id }
    })
    if (updated) {
      const updatedLivro = await Livro.findByPk(req.params.id)
      return res.json(updatedLivro)
    }
    throw new Error('Livro não encontrado')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.deleteLivro = async (req, res) => {
  try {
    const deleted = await Livro.destroy({
      where: { id: req.params.id }
    })
    if (deleted) {
      return res.json({ message: 'Livro removido' })
    }
    throw new Error('Livro não encontrado')
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}