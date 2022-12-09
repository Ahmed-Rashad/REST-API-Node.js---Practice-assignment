const express = require('express')
const mongoose = require('mongoose')
const response = {
    success: true,
    messages: []
}

function routes(product) {
    const productRouter = express.Router()
    productRouter.route('/products').post((req, res) => {
            const productObj = new product(req.body)
            productObj.save()
            response.results = productObj
            return res.json(response)
        })
        .get((req, res) => {
            
            const query = {}
            if (req.query.categoryID) {
                query.categoryID = req.query.categoryID
            }
            product.find(query, (err, products) => {
                if (err)
                    return res.send(err)
                
                response.results = products
                return res.json(response)

            })
        })

    productRouter.route('/products/:id').get((req, res) => {
        var product_id = new mongoose.Types.ObjectId(req.params.id);
        product.findById(product_id, (err, product) => {
            if (err)
                return res.send(err)
            
            response.results = product
            return res.json(response)

        })
    }).put((req, res) => {
        var product_id = new mongoose.Types.ObjectId(req.params.id);
        product.findById(product_id, (err, product) => {
            if (err)
                return res.send(err)

            product.name = req.body.name
            product.price = req.body.price
            product.quantity = req.body.quantity
            product.imgURL = req.body.imgURL
            product.categoryID = req.body.categoryID
            product.save()
            rresponse.results = product
            return res.json(response)

        })
    }).patch((req, res) => {

        var product_id = new mongoose.Types.ObjectId(req.params.id);
        product.findById(product_id, (err, product) => {
            if (err)
                return res.send(err)

            if (req.body._id)
                delete req.body._id
            Object.entries(req.body).forEach(item => {
                const key = item[0]
                const value = item[1]
                product[key] = value
            })

            product.save()
            response.results = product
            return res.json(response)

        })


    }).delete((req, res) => {
        var product_id = new mongoose.Types.ObjectId(req.params.id);
        product.findOneAndRemove(product_id, function (err, doc) {
            if (err)
                return res.send(err)

            return res.sendStatus(204)
        });
    })


    return productRouter
}

module.exports = routes