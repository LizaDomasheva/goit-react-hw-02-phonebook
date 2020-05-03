import React, { Component } from 'react';
import { ContactForm } from '../components/contactForm/ContactForm';
import { ContactList } from '../components/contactList/ContactList';
import { Filter } from '../components/filter/Filter';
import styles from '../components/App.module.css'

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getContactInfo = newContact => {
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  searchFilter = e => {
    const { filter, contacts } = this.state;
    this.setState({ filter: e.target.value.toLowerCase() });
    this.searchContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });
  };

  searchContacts = [];

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prev => ({
      contacts: [...prev.contacts.filter(contact => contact.id !== id)],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h2 className={styles.title}>Phonebook</h2>
        <ContactForm getContactInfo={this.getContactInfo} contacts={contacts} />
        <h2 className={styles.title}>Contacts</h2>
        {contacts.length >= 2 && (
          <Filter filter={filter} searchFilter={this.searchFilter} />
        )}
        <ContactList
          contacts={contacts}
          searchContacts={this.searchContacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
