const router = require('express').Router()

const ProductsController = require('../controllers/products')

// verbos http (4 tipos)
// GET - obter dados
// POST - enviar/receber dados 
// PUT - atualizar dados
// DELETE - remover dados

router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post)
router.put('/products/:id', ProductsController.put)
//router.delete('/products', ProductsController.delete)

module.exports = router