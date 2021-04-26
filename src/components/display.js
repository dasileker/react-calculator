import propTypes from 'prop-types';

const Display = ({ Total }) => <h1>{Total}</h1>;

export default Display;


Display.defaultProps = {
  Total: '0',
}

Display.propTypes = {
  Total: propTypes.string,

}