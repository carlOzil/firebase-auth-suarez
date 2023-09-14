const express = require('express');
const { fireIndex, fireRegistro } = require('../controllers/fireFormController')

const router = express.Router()

router.get('/', fireIndex)

router.post('/register', fireRegistro)


module.exports = router