const data = require('../data/zoo_data');

const checkDay = (day) => {
  if (day === 'Monday') return 'The zoo will be closed!';
  const { species } = data;
  return species.filter(({ availability }) =>
    availability.some((value) => value === day)).map(({ name }) => name);
};

const chechHour = (obj, day) => {
  if (day === 'Monday') return 'CLOSED';
  const { open, close } = obj[day];
  return `Open from ${open}am until ${close}pm`;
};

const Schedules = (value) => {
  const { hours } = data;
  const days = ((!value) ? Object.keys(hours) : [value]);
  return days.reduce((Object, day) => {
    const obj = Object;
    obj[day] = {
      officeHour: chechHour(hours, day),
      exhibition: checkDay(day),
    };
    return obj;
  }, {});
};

function getSchedule(scheduleTarget) {
  const { species, hours } = data;
  const searchByDay = Object.keys(hours).some((key) => key === scheduleTarget);
  const searchByName = species.some(({ name }) => name === scheduleTarget);
  if (searchByName) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  if (searchByDay) {
    return Schedules(scheduleTarget);
  }
  return Schedules();
}

module.exports = getSchedule;
