const express = require('express')
const router = express.Router()
const emprestimoController = require('../controllers/emprestimoController')

router.post('/', emprestimoController.realizarEmprestimo)
router.put('/:id/devolucao', emprestimoController.realizarDevolucao)
router.get('/', emprestimoController.listarEmprestimos)
router.get('/usuario/:usuario_id', emprestimoController.buscarEmprestimosUsuario)

module.exports = router