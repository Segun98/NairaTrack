const express = require('express')
const router = express.Router()
const {
    getAccountTwo,
    addAccountTwo,
    deleteAccountTwo
} = require('../controllers/accounttwo')


router
    .route('/')
    .get(getAccountTwo);

router
    .route('/add')
    .post(addAccountTwo);

router
    .route('/delete/:id')
    .delete(deleteAccountTwo);

module.exports = router