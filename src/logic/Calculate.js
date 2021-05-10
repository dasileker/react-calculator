import operate from './Operate';

const isOperation = (op) => ['X', '-', '+', '÷', '+/-', '%'].indexOf(op) > -1;

const appendNum = (data, number) => {
  if (!data) {
    return number;
  }

  if (
    (data === '0' && number === '0')
    || (number === '.' && data.indexOf('.') > -1)
  ) {
    return data;
  }

  return `${data}${number}`;
};

const calculate = ({ total = null, next = null, operation = null }, button) => {
  if (button === 'AC') {
    return { total: null, next: null, operation: null };
  } if (button === '=') {
    if (next && operation && total) {
      return { total: operate(next, total, operation), operation: null, next: null };
    }
  } else if (isOperation(button)) {
    if (button === '+/-') {
      if (total) {
        return { operation, next, total: operate(total, '-1', 'X') };
      } if (next) {
        return { next: operate(next, '-1', 'X'), total: null, operation: null };
      }
    } else if (button === '%') {
      if (total) {
        return { next, operation, total: operate(next, operate(total, '100', '÷'), 'X') };
      }
    } else if (total && operation && next) {
      return {
        next: operate(next, total, operation),
        operation: button,
        total: null,
      };
    } else if (total && !next) {
      return {
        next: total,
        operation: button,
        total: null,
      };
    } else if (next) {
      return {
        next,
        operation: button,
        total: null,
      };
    }
  } else if (operation) {
    return { total: appendNum(total, button), next, operation };
  } else if (next || button !== '0') {
    return { next: appendNum(next, button), total: null, operation: null };
  }

  return { total, next, operation };
};

export default calculate;
