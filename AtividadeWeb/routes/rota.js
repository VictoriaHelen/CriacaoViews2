const express = require('express');
const router = express.Router();
const Produto = require('../models/Produto');
const bodyParser = require('body-parser');
const { Op } = require('sequelize');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/Procurar', (req, res) => {
    res.render('Procura');
});

router.post('/Procurar', async (req, res) => {
    const { name, valor } = req.body;

    try {
        const resultados = await Produto.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                },
                valor: {
                    [Op.eq]: valor
                }
            }
        });

       
    } catch (err) {
        console.error(err);
        res.status(404).send('Erro');
    }
});


router.get('/resultadoPesquisa', (req, res) => {
    const resultados = JSON.parse(req.query.resultados);

    res.render('resultadoPesquisa', { resultados });
});


router.post('/insere', async (req, res) => {
    const { name, valor } = req.body;

    try {
        const novoProduto = await Produto.create({
            name,
            valor
        });
        res.render('insere', { message: 'UHULLLL ' });
    } catch (err) {
        console.error(err);
        res.status(404).send('Erro');
    }
});
router.get('/insere', (req, res) => {
    res.render('insere');
});


module.exports = router;
