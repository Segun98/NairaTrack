const route = require('express').Router()
const accountOne = require('../models/AccountOne')



route.get('/', async (req, res) => {
    try {
        const transactions = await accountOne.find()
        return res.json({
            data: transactions
        })

    } catch (err) {
        return res.json({
            success: false,
            error: 'Internal Server Error',
            err
        })
    }
})

route.post('/add', async (req, res) => {

    const {
        name,
        amount,
        date,
        type,
        category
    } = req.body;
    try {
        await accountOne.create({
            name,
            amount,
            date,
            type,
            category
        });
        return res.json({
            success: true,
            data: "transaction has been added"
        })

    } catch (err) {
        return res.json({
            success: false,
            error: 'Internal Server Error',
            err
        })
    }

})

route.delete('/delete/:id', async (req, res) => {
    console.log(req.params);

    try {
        const transaction = await accountOne.findById(req.params.id)
        if (!transaction) return res.json({
            error: 'no transaction'
        })
        await transaction.remove()
        return res.json({
            succes: true,
            message: "transaction has been deleted"
        })
    } catch (err) {
        res.json({
            succes: false,
            message: "internal server error",
            err
        })
    }

})


module.exports = route