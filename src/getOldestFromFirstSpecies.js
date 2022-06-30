const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { species, employees } = data;
  const specie = employees.find(({ id: value }) => value === id).responsibleFor[0];
  const { residents } = species.find(({ id: value }) => value === specie);
  const older = residents.map(({ age }) => age).reduce((a, b) => Math.max(a, b), -Infinity);
  return [residents.find(({ age }) => age === older)]
    .reduce((array, { name, sex, age }) => {
      const arr = array;
      arr.push(name, sex, age);
      return arr;
    }, []);
}

module.exports = getOldestFromFirstSpecies;

// const act = getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

// console.log(act);
