import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFindContactByName } from 'redux/contacts/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectFindContactByName);

  return (
    <ul>
      {contacts.length > 0 ? (
        contacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact}></ContactListItem>
        ))
      ) : (
        <p className={css.message}>No contacts found...</p>
      )}
    </ul>
  );
};
