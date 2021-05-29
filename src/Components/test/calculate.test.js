import calculate from '../../logic/calculate';

describe('Calculate', () => {
  let empty;

  beforeEach(() => {
    empty = { next: null, operation: null, total: null };
  });

  describe('Clearing (Using the AC button)', () => {
    test('Clears everything when AC is used', () => {
      const data1 = { next: '1', operation: '+' };
      const data2 = { next: '1', operation: '+', total: '123' };

      const result1 = calculate(data1, 'AC');
      const result2 = calculate(data2, 'AC');

      expect(result1).toEqual(empty);
      expect(result2).toEqual(empty);
    });
  });

  describe('Digit management', () => {
    test('Sets next to the specified digit when next & operation are empty', () => {
      const data = {};

      const result = calculate(data, '1');

      expect(result).toEqual(Object.assign(empty, { next: '1' }));
    });

    test('Appends the specified digit to next when next already contains other digits', () => {
      const data = { next: '123' };

      const result = calculate(data, '1');

      expect(result).toEqual(Object.assign(empty, { next: '1231' }));
    });

    test('Sets total to the specified digit when next & operation are filled and total is empty', () => {
      const data = { next: '1', operation: '+' };

      const result = calculate(data, '1');

      expect(result).toEqual(Object.assign(data, { total: '1' }));
    });

    test('Sets total to the specified digit when next & operation are filled and total contains digits', () => {
      const data = { next: '1', operation: '+', total: '123' };

      const result = calculate(data, '1');

      expect(result).toEqual(Object.assign(data, { total: '1231' }));
    });

    test('Ignores extra zeroes at the start', () => {
      const data = { next: '1', operation: '+', total: '0' };

      const result = calculate(data, '0');

      expect(result).toEqual(data);
    });

    test('Adds the decimal dot correctly and doesn\'t allow duplicate decimal dots', () => {
      const data1 = {};
      const data2 = { next: '1' };
      const data3 = { next: '1.1' };
      const data4 = { next: '.1' };

      const result1 = calculate(data1, '.');
      const result2 = calculate(data2, '.');
      const result3 = calculate(data3, '.');
      const result4 = calculate(data4, '.');

      expect(result1).toEqual(Object.assign(empty, { next: '.' }));
      expect(result2).toEqual(Object.assign(empty, { next: '1.' }));
      expect(result3).toEqual(Object.assign(empty, { next: '1.1' }));
      expect(result4).toEqual(Object.assign(empty, { next: '.1' }));
    });
  });

  describe('Handle operations', () => {
    test('Ignores an operation when next & total are empty', () => {
      const result = calculate({}, '+');

      expect(result).toEqual(empty);
    });

    test('Sets the operation when next is not empty but total is empty', () => {
      const data = { next: '123' };

      const result = calculate(data, '+');

      expect(result).toEqual(Object.assign(empty, data, { operation: '+' }));
    });
  });

  describe('Handle equals (=) sign', () => {
    test('Ignore the equals operation if any of next, operation and total are empty', () => {
      const data1 = {};
      const data2 = { next: '1' };
      const data3 = { next: '12', operation: '-' };

      const result1 = calculate(data1, '=');
      const result2 = calculate(data2, '=');
      const result3 = calculate(data3, '=');

      expect(result1).toEqual(Object.assign(empty, data1));
      expect(result2).toEqual(Object.assign(empty, data2));
      expect(result3).toEqual(Object.assign(empty, data3));
    });
  });
});
