const data = require('../data/zoo_data');

const { species, employees } = data;

const searchAnimalById = (responsibleAnimals, tag) => responsibleAnimals.map((value) =>
  species.find(({ id: animal }) => animal === value)[tag]);

const personCoverage = (employ) => {
  const { id: personId, firstName, lastName, responsibleFor } = employ;
  return {
    id: personId,
    fullName: `${firstName} ${lastName}`,
    species: searchAnimalById(responsibleFor, 'name'),
    locations: searchAnimalById(responsibleFor, 'location'),
  };
};

const findEmploy = (object) => {
  const { name, id } = object;
  return employees.find(({ id: personId, lastName, firstName }) =>
    personId === id || lastName === name || firstName === name);
};

function getEmployeesCoverage(object) {
  if (!object) return employees.map((person) => personCoverage(person));
  const search = findEmploy(object);
  if (!search) throw new Error('Informações inválidas');
  return personCoverage(search);
}

module.exports = getEmployeesCoverage;
