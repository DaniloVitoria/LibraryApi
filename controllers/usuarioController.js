const Usuario = require('../models/Usuario')

exports.createUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body)
    res.status(201).json(usuario)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      attributes: { exclude: ['senha'] }
    })
    res.json(usuarios)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id, {
      attributes: { exclude: ['senha'] }
    })
    if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' })
    res.json(usuario)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.updateUsuario = async (req, res) => {
  try {
    const [updated] = await Usuario.update(req.body, {
      where: { id: req.params.id }
    })
    if (updated) {
      const updatedUsuario = await Usuario.findByPk(req.params.id, {
        attributes: { exclude: ['senha'] }
      })
      return res.json(updatedUsuario)
    }
    throw new Error('Usuário não encontrado')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.deleteUsuario = async (req, res) => {
  try {
    const deleted = await Usuario.destroy({
      where: { id: req.params.id }
    })
    if (deleted) {
      return res.json({ message: 'Usuário removido' })
    }
    throw new Error('Usuário não encontrado')
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}