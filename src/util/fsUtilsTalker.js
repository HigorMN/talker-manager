const fs = require('fs').promises;
const path = require('path');

const TALKER_DATA_PATH = '../talker.json';

async function readTalkerData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, TALKER_DATA_PATH), 'utf-8');
    const talker = JSON.parse(data);
    return talker;
  } catch (error) {
    return `Erro ao ler o arquivo:: ${error}`;
  }
}

async function findTalkerId(id) {
  const data = await readTalkerData();
  const findId = data.find((talker) => +talker.id === +id);

  return findId;
}

async function writeTalkerData(newTalker) {
  try {
    const oldTalker = await readTalkerData();
    const allTalker = JSON.stringify([...oldTalker, newTalker], null, 2);
    await fs.writeFile(path.resolve(__dirname, TALKER_DATA_PATH), allTalker);
  } catch (error) {
    return `Erro ao escrever o arquivo: ${error}`;
  }
}

module.exports = {
  readTalkerData,
  findTalkerId,
  writeTalkerData,
};