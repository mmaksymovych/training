const linear_search = require('./linear_search');

describe('linear search algorithm', function() {

  test('should return correct index of number', () => {
    const element = linear_search([1,3,5,7,9], 9);
    expect(element).toBe(4);
  });

  test('should return false because number does not exist', () => {
    const element = linear_search([1,3,5,7,9], 10);
    expect(element).toBe(false);
  });

});