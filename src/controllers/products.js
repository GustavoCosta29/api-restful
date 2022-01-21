const ProductModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params 
    
    const obj = id ? { _id: id } : null
    
    const products = await ProductModel.find(obj)


    res.send(products)
}

async function post(req, res) { 
   
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'Cadastrado com sucesso!'
    }) 

}

async function put(req, res) {
    const { id } = req.params

    //método onde vem o dado atualizado

    const product = await ProductModel.findByIdAndUpdate({ _id: id}, req.body, { new: true})

    res.send({
        message: 'sucess',
        product,
    })

    /* método para atualizar dados no banco de dados, porem o retorno nao vem atualizado!! 
    const product = await ProductModel.findOne({ _id: id})

    await product.updateOne(req.body)

    res.send({
        message: 'sucess',
        product,
    }) 
    */
}

async function remove(req, res) {
    const { id } = req.params

    const remove = await ProductModel.deleteOne({ _id: id})

    const message = remove.ok ? 'sucess' : 'error'

    res.send({
        message,
    })

}

module.exports = {
    get,
    post,
    put,
    remove,  
}