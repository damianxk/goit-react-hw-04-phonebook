import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

import './App.css';

export const App = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setIsMounted(true);
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts) || [];
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts, isMounted]);

  const appendContacts = contact => {
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  // eslint-disable-next-line no-unused-vars
  const addContact = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    const isAlreadyInContacts = contacts.some(
      person => person.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isAlreadyInContacts) {
      return alert(`{contact.name} already in contacts`);
    }

    appendContacts(contact);
    event.target.reset();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter setFilter={setFilter} />
          <ContactList
            contacts={contacts}
            filterValue={filter}
            setContacts={setContacts}
          />
        </>
      ) : (
        ''
      )}
    </div>
  );
};
