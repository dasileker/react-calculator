import operate from './operate';

const isOperation = op => ['x', '-', '+', '÷', '+/-', '%'].indexOf(op) > -1;

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
  if ((total && total.startsWith('Error')) || (next && next.startsWith('Error'))) {
    return calculate({ total: null, next: null, operation: null }, button);
  }
  if (button === 'AC') {
    return { total: null, next: null, operation: null };
  } if (button === '=') {
    if (next && operation && total) {
      return { total: operate(next, total, operation), operation: null, next: null };
    }
  } else if (isOperation(button)) {
    if (button === '+/-') {
      if (total) {
        return { operation, next, total: operate(total, '-1', 'x') };
      }
      if (next) {
        return { next: operate(next, '-1', 'x'), total: null, operation: null };
      }
    } else if (button === '%') {
      if (total) {
        return { next, operation, total: operate(total, '100', '÷') };
      }
      if (next) {
        return { next: operate(next, '100', '÷'), operation, total };
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
  } else {
    return { next: appendNum(next, button), total: null, operation: null };
  }

  return { total, next, operation };
};

export default calculate;
