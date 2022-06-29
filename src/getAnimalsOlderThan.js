const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const { residents } = species.find(({ name }) => name === animal);
  return residents.every(({ age: animalAge }) => animalAge >= age);
}

module.exports = getAnimalsOlderThan;
