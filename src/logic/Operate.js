import Big from 'big.js';

const operate = (num1, num2, op) => {
  const big1 = Big(num1);
  const big2 = Big(num2);

  let result;
  switch (op) {
    case '+':
      result = big1.plus(big2);
      break;
    case '-':
      result = big1.minus(big2);
      break;
    case 'X':
      result = big1.times(big2);
      break;
    case '÷':
      if (big2.toNumber() === 0) {
        return 'Error: division by zero.';
      }
      result = big1.div(big2);
      break;
    default:
      throw new Error(`Invalid operator ${op}`);
  }

  return result.toNumber().toString();
};

export default operate;
