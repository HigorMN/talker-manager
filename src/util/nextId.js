const talker = require('../talker.json');

const nextId = () => {
  const data = talker;
  const dataIndex = data.length;

  const { id } = data[dataIndex - 1];

  return +id + 1;
};

module.exports = nextId;