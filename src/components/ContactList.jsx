import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
