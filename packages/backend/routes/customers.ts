import express from 'express';
const router = express.Router();

const { createCustomer, getAllCustomers } = require('../controllers/customers');

router.post('/', createCustomer).get('/', getAllCustomers);

module.exports = router;
