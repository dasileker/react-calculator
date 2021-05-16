import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button clickHandler={() => null} name="test" />, div);
  });

  test('props.onClick is called when button is clicked with the name of the button as the first argument', () => {
    const fn = jest.fn();
    const tree = create(<Button clickHandler={fn} name="wtf" />);

    const button = tree.root.findByType('button');
    button.props.onClick();

    expect(fn.mock.calls.length).toBe(1);
    expect(fn.mock.calls[0][0]).toBe('wtf');
  });

  test('Width is set to 50% when (wide) prop is set to true otherwise the width is 25%', () => {
    const container1 = Enzyme.shallow(<Button name="wtf" clickHandler={() => null} wide />);
    const container2 = Enzyme.shallow(<Button name="wtf" clickHandler={() => null} />);

    expect(container1.get(0).props.style).toHaveProperty('width', '50%');
    expect(container2.get(0).props.style).toHaveProperty('width', '25%');
  });

  test('Set the text content of the button to the text provided by the name prop', () => {
    const container = Enzyme.shallow(<Button name="wtf" clickHandler={() => null} wide />);

    expect(container.text()).toEqual('wtf');
  });

  test('Sets the color according to the provided color prop', () => {
    const container = Enzyme.shallow(<Button name="wtf" color="orange" clickHandler={() => null} wide />);

    expect(container.get(0).props.style).toHaveProperty('background', 'orange');
  });
});
