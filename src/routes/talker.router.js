const express = require('express');
const authToken = require('../middlewares/authToken');
const {
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateTalkerWatchedAt,
  validateTalkerRate,
} = require('../middlewares/validateTalkers');
const { readTalkerData, findTalkerId, writeTalkerData } = require('../util/fsUtilsTalker');
const nextId = require('../util/nextId');
const { HTTP_OK_STATUS, HTTP_NOT_FOUND_STATUS, HTTP_CREATED_STATUS } = require('./httpStatus');

const router = express.Router();

router.post(
  '/talker',
  authToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateTalkerWatchedAt,
  validateTalkerRate,
  (req, res) => {
    const { name, age, talk } = req.body;
    const newTalker = {
      name,
      age,
      id: nextId(),
      talk,
    };
    res.status(HTTP_CREATED_STATUS).json(newTalker);
    writeTalkerData(newTalker);
  },
);

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
