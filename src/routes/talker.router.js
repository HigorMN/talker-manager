const express = require('express');
const authToken = require('../middlewares/authToken');
const nextId = require('../util/nextId');
const {
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateTalkerWatchedAt,
  validateTalkerRate,
} = require('../middlewares/validateTalkers');
const {
  readTalkerData,
  findTalkerId,
  writeTalkerData,
  putWriteTalkerData,
} = require('../util/fsUtilsTalker');
const {
  HTTP_OK_STATUS,
  HTTP_NOT_FOUND_STATUS,
  HTTP_CREATED_STATUS,
} = require('./httpStatus');

const router = express.Router();

router.post(
  '/talker',
  authToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateTalkerWatchedAt,
  validateTalkerRate,
  async (req, res) => {
    const { name, age, talk } = req.body;
    const newTalker = {
      name,
      age,
      id: nextId(),
      talk,
    };
    await writeTalkerData(newTalker);
    res.status(HTTP_CREATED_STATUS).json(newTalker);
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

router.put(
  '/talker/:id',
  authToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateTalkerWatchedAt,
  validateTalkerRate,
  async (req, res) => {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    await putWriteTalkerData(id, name, age, talk);
    const findId = await findTalkerId(id);

    res.status(HTTP_OK_STATUS).json(findId);
  },
);

module.exports = router;
