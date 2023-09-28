import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, setFilter }) => {
  const filterContacts = event => {
    setFilter(event.target.value);
  };

  return (
    <div className={css.filter}>
      <input
        type="text"
        name="filter"
        className={css.inputFilter}
        placeholder="Find contacts"
        value={value}
        onChange={filterContacts}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};
