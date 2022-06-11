/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

const {getdaisyHandler,
    predictdaisyHandler,
    deletedaisyHandler,
} = require('../handler/daisy');

router.get('/', getdaisyHandler);
router.post('/', predictdaisyHandler);
router.delete('/', deletedaisyHandler);

module.exports = router;
