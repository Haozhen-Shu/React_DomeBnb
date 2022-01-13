const { check } = require('express-validator');
const { handleValidationErrors } = require('./utils');

const userId = check('userId')
    .notEmpty()
    .isInt({ min: 0})
    .withMessage('Invalid userId')
const address = check('address')
    .notEmpty()
    .isString()
    .withMessage('Invalid address')
const city = check('city')
    .notEmpty()
    .isString()
    .withMessage('Invalid city')
const state = check('state')
    .notEmpty()
    .isString()
    .withMessage('Invalid state')
const country = check('country')
    .notEmpty()
    .isString()
    .withMessage('Invalid country')
const name = check('name')
    .notEmpty()
    .isString()
    .withMessage('Invalid name')
const price = check('price')
    .notEmpty()
    .isDecimal()
    .withMessage('Invalid price')

exports.validateCreate = [
    userId,
    address,
    city, 
    state,
    country,
    name,
    price,
    handleValidationErrors,
];

exports.validateUpdate = [
    userId,
    address,
    city,
    state,
    country,
    name,
    price,
    handleValidationErrors,
]