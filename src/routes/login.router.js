const express = require('express');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const generateToken = require('../util/generateToken');

const { HTTP_OK_STATUS } = require('./httpStatus');

const router = express.Router();

router.post('/login', validateEmail, validatePassword, (_req, res) => {
  const token = generateToken();
  res.status(HTTP_OK_STATUS).json({ token });
});

module.exports = router;