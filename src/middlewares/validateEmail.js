const { HTTP_BAD_REQUEST_STATUS } = require('../routes/httpStatus');

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "email" é obrigatório',
    });
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }

  next();
};

module.exports = validateEmail;