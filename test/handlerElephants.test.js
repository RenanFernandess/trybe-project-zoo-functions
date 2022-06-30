const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Caso a função não receba um parametro deve retornar undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Caso a função receba um parametro que não seja string, deve retornar a mensagem "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(0)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Caso receba o parametro "count" deve retornar a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Caso receba o parametro "names", retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Caso receba o parametro "averageAge", retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Caso receba o parametro "location", retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Caso receba o parametro "popularity", retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Caso receba o parametro "availability", retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Caso receba o parametro "name", retorna o nome', () => {
    expect(handlerElephants('name')).toEqual('elephants');
  });
});
