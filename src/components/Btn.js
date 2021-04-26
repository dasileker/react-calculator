import propTypes from 'prop-types';

const { BTn } = btn => <button type="button">{btn.key}</button>;

export default BTn;

BTn.propTypes = {
  key: propTypes.string,
}