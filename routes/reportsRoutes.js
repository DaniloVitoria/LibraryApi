// routes/reports.js
const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Rota para obter relatório de livros mais emprestados
router.get('/livros-mais-emprestados', reportController.getLivrosMaisEmprestados);

// Rota para obter relatório de usuários com empréstimos pendentes
router.get('/usuarios-emprestimos-pendentes', reportController.getUsuariosComEmprestimosPendentes);

module.exports = router;