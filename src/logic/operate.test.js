import operate from './operate';

describe('Operate', () => {
  test('Adds two numbers when provided with the plus sign (+)', () => {
    const num1 = 1;
    const num2 = 2;

    const result = operate(num1, num2, '+');

    expect(result).toEqual((num1 + num2).toString());
  });

  test('Multiplies two numbers when provided with the multiplication sign (x)', () => {
    const num1 = 1;
    const num2 = 2;

    const result = operate(num1, num2, 'x');

    expect(result).toEqual((num1 * num2).toString());
  });

  test('Subtracts two numbers when provided with the minus sign (-)', () => {
    const num1 = 1;
    const num2 = 2;

    const result = operate(num1, num2, '-');

    expect(result).toEqual((num1 - num2).toString());
  });

  test('Divides two numbers when provided with the division sign (÷)', () => {
    const num1 = 1;
    const num2 = 2;

    const result = operate(num1, num2, '÷');

    expect(result).toEqual((num1 / num2).toString());
  });

  test('Returns an error when trying to divide by zero', () => {
    const num1 = 1;
    const num2 = 0;

    const result = operate(num1, num2, '÷');

    expect(result).toEqual('Error: division by zero.');
  });

  test('Throws an exception when provided with an unkown operator', () => {
    const num1 = 1;
    const num2 = 2;

    expect(() => {
      operate(num1, num2, 'T');
    }).toThrow(Error);
  });
});
