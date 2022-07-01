const getOpeningHours = require('../src/getOpeningHours');

const expectHours = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

const closeHours = [
  { day: 'Tuesday', hour: '06:00-PM' },
  { day: 'Wednesday', hour: '06:00-PM' },
  { day: 'Thursday', hour: '08:00-PM' },
  { day: 'Friday', hour: '08:00-PM' },
  { day: 'Saturday', hour: '10:00-PM' },
  { day: 'Sunday', hour: '08:00-PM' },
];

const hoursOpen = [
  { day: 'Tuesday', hour: '08:00-AM' },
  { day: 'Wednesday', hour: '08:00-AM' },
  { day: 'Thursday', hour: '10:00-AM' },
  { day: 'Friday', hour: '10:00-AM' },
  { day: 'Saturday', hour: '08:00-AM' },
  { day: 'Sunday', hour: '08:00-AM' },
];

const expectedClosed = 'The zoo is closed';
const expectedOpen = 'The zoo is open';

describe('Testes da função getOpeningHours', () => {
  it('Verifica se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('Caso não seja passado nenhum parametro retorna todos os horarios', () => {
    expect(getOpeningHours()).toEqual(expectHours);
  });

  it('Caso caso passe um parametro dia inexistente deve retornan um erro', () => {
    expect(() => { getOpeningHours('Thomairos', '08:00-PM'); }).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('Verifica sé as horas informada existente, caso não exista retorna um erro', () => {
    expect(() => { getOpeningHours('friday', '14:00-AM'); }).toThrow(/^The hour must be between 0 and 12$/);
  });

  it('Verifica sé os minutos informados existente, caso não exista retorna um erro', () => {
    expect(() => { getOpeningHours('friday', '11:70-AM'); }).toThrow(/^The minutes must be between 0 and 59$/);
  });

  it('Verifica sé os minutos informados termina com numeros, caso não retorna um erro', () => {
    expect(() => { getOpeningHours('friday', '11:2g-AM'); }).toThrow(/^The minutes should represent a number$/);
  });

  it('Verifica sé as horas informada termina com numeros, caso não retorna um erro', () => {
    expect(() => { getOpeningHours('friday', '1b:00-AM'); }).toThrow(/^The hour should represent a number$/);
  });

  it('Verifica sé o formato da abreviação e compativel, caso não seja compativel retorna um erro', () => {
    expect(() => { getOpeningHours('friday', '11:00-GM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Caso receba um dia e um horario correspodente ao horario de funcionamento, retorna "The zoo is open"', () => {
    expect(getOpeningHours('friday', '11:00-AM')).toBe(expectedOpen);
  });

  it('Caso receba um dia e um horario que não correspodente ao horario de funcionamento, retorna "The zoo is closed"', () => {
    expect(getOpeningHours('friday', '08:00-AM')).toBe(expectedClosed);
  });

  it('Verifica se recber domingo como parmetro, retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '08:00-AM')).toBe(expectedClosed);
  });

  it('Caso receba um horario iqual a 00:00-XM deve, retornan "The zoo is closed"', () => {
    expect(getOpeningHours('Friday', '00:00-AM')).toBe(expectedClosed);
  });

  it('Verifica se é case sensitive', () => {
    expect(getOpeningHours('friday', '11:00-AM')).toBe(expectedOpen);
    expect(getOpeningHours('Friday', '11:00-AM')).toBe(expectedOpen);
    expect(getOpeningHours('fRiDAy', '11:00-AM')).toBe(expectedOpen);
    expect(getOpeningHours('FRIDAY', '11:00-AM')).toBe(expectedOpen);
  });

  it('Verifica se o retorno é uma string', () => {
    expect(typeof getOpeningHours('friday', '11:00-AM')).toBe('string');
    expect(typeof getOpeningHours('friday', '00:00-AM')).toBe('string');
    expect(typeof getOpeningHours('friday', '08:00-AM')).toBe('string');
  });

  it('Verifica se passar todos os horarios em que o zoologico se encontra abertor, retorna "The zoo is open"', () => {
    const actual = () => {
      let fun;
      hoursOpen.forEach(({ day, hour }) => { fun = getOpeningHours(day, hour); });
      return fun;
    };
    expect(actual()).toBe(expectedOpen);
  });

  it('Verifica se passar todos os horarios em que o zoologico se encontra fechado, retorna "The zoo is closed"', () => {
    const actual = () => {
      let fun;
      closeHours.forEach(({ day, hour }) => { fun = getOpeningHours(day, hour); });
      return fun;
    };
    expect(actual()).toBe(expectedClosed);
  });
});
