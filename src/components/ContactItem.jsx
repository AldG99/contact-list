import React from 'react';

const ContactItem = ({ contact }) => {
  return (
    <div className="contact-item">
      <h3>{contact.name}</h3>
      <p>{contact.email}</p>
    </div>
  );
};

export default ContactItem;
