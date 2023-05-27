import express from 'express';
const router = express.Router();

const { createCustomer } = require('../controllers/customers');

router.post('/', createCustomer);

module.exports = router;
