const express = require('express');
const { readTalkerData } = require('./util/fsUtils');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;

// não remova esse endpoint, e para o avaliador funcionar a
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  res.status(HTTP_OK_STATUS).json(await readTalkerData());
});

module.exports = app;
