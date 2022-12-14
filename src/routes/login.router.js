const express = require('express');

const { HTTP_OK_STATUS } = require('./httpStatus');

const router = express.Router();

router.post('/login', (_req, res) => {
  const token = (Math.random().toString(16).substring(2) 
  + Math.random().toString(16).substring(2)).substring(0, 16);

  res.status(HTTP_OK_STATUS).json({ token });
});

module.exports = router;