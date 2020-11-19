const Transaction = require('../models/Transaction')


//get all transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        })
    }
}
//add a transaction
exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            succes: true,
            data: transaction
        });
    } catch (err) {


    }
}
    
//delete a transaction
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transaction')
}
