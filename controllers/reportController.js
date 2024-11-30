
// controllers/reportController.js
const { Sequelize } = require('sequelize');
const Emprestimo = require('../models/Emprestimo');
const Livro = require('../models/Livro');
const Usuario = require('../models/Usuario');

class ReportController {
    async getLivrosMaisEmprestados(req, res) {
        try {
            const relatorio = await Emprestimo.findAll({
                attributes: [
                    'id_livro',
                    [Sequelize.fn('COUNT', Sequelize.col('Emprestimo.id_livro')), 'totalEmprestimos']
                ],
                include: [{
                    model: Livro,
                    attributes: ['titulo', 'autor']
                }],
                group: ['id_livro'],
                order: [[Sequelize.fn('COUNT', Sequelize.col('Emprestimo.id_livro')), 'DESC']]
            });

            res.status(200).json({
                success: true,
                data: relatorio
            });
        } catch (error) {
            console.error('Erro ao gerar relatório:', error);
            res.status(500).json({
                success: false,
                error: 'Erro ao gerar relatório de livros mais emprestados',
                details: error.message
            });
        }
    }

    async getUsuariosComEmprestimosPendentes(req, res) {
        try {
            const relatorio = await Emprestimo.findAll({
                where: {
                    data_devolucao_real: null
                },
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
            });

            res.status(200).json({
                success: true,
                data: relatorio
            });
        } catch (error) {
            console.error('Erro ao gerar relatório:', error);
            res.status(500).json({
                success: false,
                error: 'Erro ao gerar relatório de usuários com empréstimos pendentes',
                details: error.message
            });
        }
    }
}

module.exports = new ReportController();