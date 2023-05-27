import express from 'express'
const router = express.Router()

const {getAllInsuranceProducts} = require('../controllers/insuranceProducts')

router.get('/', getAllInsuranceProducts)

module.exports = router