import React, { useState } from "react";
import Tilelist from "../TilelistComp/tileList";
import ContactForm from "../contactFormComponent/ContactForm";
import { useNavigate } from "react-router-dom";
import "./contactPage.css";

const ContactPage = ({ contactList, onAdd, handleRemoveContact }) => {
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const checkName = (name) => {
    if (contactList.some((contact) => contact.name === name)) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
    }
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setContactName(name);
    checkName(name);
  };
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setContactEmail(email);
  };
  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    setContactNumber(phone);
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/contacts");
    checkName(contactList.name);
    if (!isDuplicate) {
      onAdd({
        name: contactName,
        phone: contactNumber,
        email: contactEmail,
      });
    } else {
      alert("duplicate name found unable to add contact");
    }
    navigate("/contacts");
  };

  return (
    <div className="contactPage">
      <section className="contactPage__list">
        <h2>Contact List</h2>
        {isDuplicate && <p>Contact Exists</p>}
        <Tilelist
          items={contactList}
          type="contact"
          handleRemoveContact={handleRemoveContact}
        />
      </section>
      <section className="contactPage__form">
        <h2>Add Contacts</h2>
        <ContactForm
          name={contactName}
          email={contactEmail}
          number={contactNumber}
          onNameChange={handleNameChange}
          onEmailChange={handleEmailChange}
          onPhoneChange={handlePhoneChange}
          onSubmit={handleSubmit}
        />
      </section>
    </div>
  );
};

export default ContactPage;
