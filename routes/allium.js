/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const {getCornHandler,
    predictCornHandler,
    deleteCornHandler,
} = require('../handler/allium');

router.get('/', getalliumHandler);
router.post('/', predictalliumHandler);
router.delete('/', deletealliumHandler);

module.exports = router;
