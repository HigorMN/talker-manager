const express = require('express');
const { readTalkerData, findTalkerId } = require('../util/fsUtilsTalker');
const { HTTP_OK_STATUS, HTTP_NOT_FOUND_STATUS } = require('./httpStatus');

const router = express.Router();

router.get('/talker', async (_req, res) => {
  res.status(HTTP_OK_STATUS).json(await readTalkerData());
});

router.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const findId = await findTalkerId(id);

  if (!findId) {
    return res.status(HTTP_NOT_FOUND_STATUS).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }

  return res.status(HTTP_OK_STATUS).json(findId);
});

module.exports = router;