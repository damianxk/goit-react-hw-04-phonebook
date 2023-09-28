import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, filterValue, setContacts }) => {
  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const filteredArray = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredArray.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          {name}: {number}
          <button
            type="button"
            className={css.button}
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filterValue: PropTypes.string.isRequired,
  setContacts: PropTypes.func.isRequired,
};
