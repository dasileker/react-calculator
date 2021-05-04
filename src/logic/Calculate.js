import { number } from 'prop-types';
import operate from './Operate';

const isOperation = op => ['X', '-', '+', '÷', '+/-', '%'].indexOf(op) > -1;

const appendNum = (data, number) => {
  if (!data) {
    return number;
  }

  if (
    (data === '0' && number === '0') || (number == '.' && data.indexOf('.') > -1)
  ) {
    return data;
  }

  return `${data}${number}`
};

const calculate = ({ total, next, operation }, button) => {
  if (button == 'AC') {
    return {};
  } if (button == '=') {
    if (next && operation && total) {
      return { next: operate(next, total, operation) };
    }
  } else if (isOperation(button)) {
    if (button === '+/-') {

    }
  }
}