const { HTTP_BAD_REQUEST_STATUS } = require('../routes/httpStatus');

const validateTalkerName = (req, res, next) => {
  const { name } = req.body;
  console.log('name:', name);

  if (!name) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'O campo "name" é obrigatório' });
  }

  if ((name.length) < 3) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

const validateTalkerAge = (req, res, next) => {
  const { age } = req.body;

  if (!age) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'O campo "age" é obrigatório' });
  }

  if (age < 18) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};

const validateTalkerTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'O campo "talk" é obrigatório' });
  }

  next();
};

const validateTalkerWatchedAt = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt } = talk;

  if (!watchedAt) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ 
      message: 'O campo "watchedAt" é obrigatório' });
  }

  if (!/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i.test(watchedAt)) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }

  next();
};

const validateTalkerRate = (req, res, next) => {
  const { talk } = req.body;
  const { rate } = talk;

  if (rate === undefined) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'O campo "rate" é obrigatório' });
  }

  if (rate < 1 || rate > 5 || rate.toString().match(/^-?\d+\.\d+$/)) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }

  next();
};

module.exports = {
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateTalkerWatchedAt,
  validateTalkerRate,
};