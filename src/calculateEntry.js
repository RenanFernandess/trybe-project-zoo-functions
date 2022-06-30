const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;

  return { adult, child, senior };
}

function calculateEntry(entrants) {
  if (!entrants || !Object.keys(entrants).length) return 0;
  const { prices: { child, adult, senior } } = data;
  const { adult: adultN, child: childN, senior: seniorN } = countEntrants(entrants);
  return (child * childN) + (adult * adultN) + (senior * seniorN);
}

module.exports = { calculateEntry, countEntrants };
