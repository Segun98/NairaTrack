const express = require('express')
const router = express.Router()
const {
    getAccountOne,
    addAccountOne,
    deleteAccountOne
} = require('../controllers/accountone')


router
    .route('/')
    .get(getAccountOne);

router
    .route('/add')
    .post(addAccountOne);

router
    .route('/delete/:id')
    .delete(deleteAccountOne);

module.exports = router