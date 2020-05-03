import React from 'react';
import { ContactListItem } from './contactListItem/ContactListItem';
import { ContactListItemFilter } from './contactListItem/ContactListItemFilter';
import styles from './contactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({
  searchContacts,
  contacts,
  filter,
  deleteContact,
}) => (
  <ul className={styles.list}>
    {filter.length !== 0
      ? searchContacts.map(contact => (
          <ContactListItemFilter
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))
      : contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
  </ul>
);


ContactList.propTypes = {
  searchContacts: PropTypes.arrayOf(PropTypes.object),
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContact: PropTypes.func
}