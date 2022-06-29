const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  return species.filter(({ id }) => ids.some((value) => value === id));
}

module.exports = getSpeciesByIds;
