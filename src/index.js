const express = require('express');
const routers = require('./routes');
const { HTTP_OK_STATUS } = require('./routes/httpStatus');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar a
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(routers);

module.exports = app;
