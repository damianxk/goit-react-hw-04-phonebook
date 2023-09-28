import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = ({ contacts, setContacts }) => {
  const appendContacts = contact => {
    setContacts([...contacts, contact]);
  };

  const addContact = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    if (
      contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in your contacts.`);
    }

    appendContacts(contact);
    event.target.reset();
  };

  return (
    <form onSubmit={addContact} className={css.form}>
      <input
        className={css.inputName}
        type="text"
        name="name"
        pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
        autoComplete="off"
      />
      <input
        className={css.inputNumber}
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Number"
        autoComplete="off"
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
