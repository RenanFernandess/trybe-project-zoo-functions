const data = require('../data/zoo_data');

const { species } = data;

const speciesFilter = (value) => species.filter(({ location }) => location === value);
const compareLetter = (a, b) => { if (a > b) return 1; if (a < b) return -1; return 0; };

const animalFilter = (value, { includeNames, sex, sorted }) => {
  if (!includeNames) return speciesFilter(value).map(({ name }) => name);

  return speciesFilter(value).map(({ name, residents }) => {
    const obj = {};
    obj[name] = residents.filter(({ sex: animalSex }) => !sex || animalSex === sex)
      .map(({ name: animalName }) => animalName)
      .sort((a, b) => ((!sorted) ? 0 : compareLetter(a, b)));
    return obj;
  });
};

function getAnimalMap(options = { includeNames: false, sex: null, sorted: false }) {
  const locations = [...new Set(species.map(({ location }) => location))];
  return locations.reduce((object, value) => {
    const obj = object;
    obj[value] = animalFilter(value, options);
    return obj;
  }, {});
}

module.exports = getAnimalMap;
