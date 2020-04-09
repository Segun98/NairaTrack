const accountTwo = require('../models/AccountTwo')

exports.getAccountTwo = async (req, res, next) => {
    try {
        const transactions = await accountTwo.find()

        res.json({
            data: transactions
        });

    } catch (err) {
        res.json({
            success: false,
            message: "internal server error",
        });
    }

}

exports.addAccountTwo = async (req, res, next) => {

    try {
        console.log(req.body);

        const {
            name,
            amount,
            date,
            type,
            Units,
            unitPrice
        } = req.body;

        await accountTwo.create({
            name,
            amount,
            date,
            type,
            Units,
            unitPrice
        });

        res.json({
            success: true,
            message: "transaction has been added"
        });

    } catch (err) {
      res.json({
            success: false,
            message: "internal server error"
        });
    }
}

exports.deleteAccountTwo = async (req, res, next) => {
    try {
        const transaction = await accountTwo.findById(req.params.id)
        if (!transaction) {
            return res.json({
                error: 'no transaction'
            });
        }

        await transaction.remove()

        res.json({
            succes: true,
            message: "transaction has been deleted"
        });

    } catch (err) {
        res.json({
            success: false,
            message: "internal server error",
        });
    }
}