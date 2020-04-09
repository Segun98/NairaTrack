const accountOne = require('../models/AccountOne')

exports.getAccountOne = async (req, res, next) => {
    try {
        const transactions = await accountOne.find()
        res.json({
            data: transactions
        });

    } catch (err) {
        res.json({
            message: err,
        });
    }
}

exports.addAccountOne = async (req, res, next) => {

    try {
        console.log(req.body)

        const {
            name,
            amount,
            date,
            type,
            category
        } = req.body;
        await accountOne.create({
            name,
            amount,
            date,
            type,
            category
        });
        res.json({
            message: "transaction has been added"
        });

    } catch (err) {
        res.json({
            message: err
        });
    }
}

exports.deleteAccountOne = async (req, res, next) => {
    try {
        const transaction = await accountOne.findById(req.params.id)
        await transaction.remove()
        res.json({
            message: "transaction has been deleted"
        });

    } catch (err) {
        res.json({
            message: err
        });
    }

}