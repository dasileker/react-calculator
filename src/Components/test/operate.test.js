import operate from '../../logic/operate';

describe('Operate', () => {
  test('Throws an exception when provided with an unkown operator', () => {
    const num1 = 1;
    const num2 = 2;

    expect(() => {
      operate(num1, num2, 'T');
    }).toThrow(Error);
  });
});
