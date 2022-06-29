const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  return employees.some(({ managers }) => managers.some((value) => value === id));
}

function getRelatedEmployees(managerId) {
  const { employees } = data;
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter(({ managers }) => managers.some((value) => value === managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
