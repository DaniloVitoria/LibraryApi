const express = require('express')
const router = express.Router()
const livroController = require('../controllers/livroController')

router.post('/', livroController.createLivro)
router.get('/', livroController.getAllLivros)
router.get('/:id', livroController.getLivroById)
router.put('/:id', livroController.updateLivro)
router.delete('/:id', livroController.deleteLivro)

module.exports = router