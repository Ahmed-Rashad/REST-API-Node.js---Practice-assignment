const express = require('express')

function routes(category) {
    const categoryRouter = express.Router()

    categoryRouter.route('/categories').get((req, res) => {
        category.find((err, categories) => {
            response = {
                success: true,
                messages: []
            }

            if (err)
                return res.send(err)

            response.results = categories
            return res.json(response)
        })
    })

    return categoryRouter
}

module.exports = routes