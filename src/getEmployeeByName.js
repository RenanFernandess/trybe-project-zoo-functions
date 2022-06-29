const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  return !employeeName ? {} : employees.find(({ firstName, lastName }) => (
    (firstName === employeeName) || (lastName === employeeName)
  ));
}

module.exports = getEmployeeByName;
