const fs = require('fs').promises;
const path = require('path');

async function readTalkerData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../talker.json'), 'utf-8');
    const talker = JSON.parse(data);
    return talker;
  } catch (error) {
    return `Erro ao escrever o arquivo: ${error}`;
  }
}

async function findTalkerId(id) {
  const data = await readTalkerData();
  const findId = data.find((talker) => +talker.id === +id);

  return findId;
}

module.exports = {
  readTalkerData,
  findTalkerId,
};