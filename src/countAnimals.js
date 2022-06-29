const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (!animal) {
    return species.reduce((obj, { name, residents }) => {
      const object = obj;
      object[`${name}`] = residents.length;
      return obj;
    }, {});
  }
  const { specie, sex } = animal;
  return species.find(({ name }) => name === specie).residents
    .filter(({ sex: animalSex }) => !sex || sex === animalSex).length;
}

module.exports = countAnimals;
