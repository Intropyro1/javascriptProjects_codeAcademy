import React from "react";
import { useNavigate } from "react-router-dom";
import "./contactForm.css";
const ContactForm = ({
  name,
  phoneNumber,
  email,
  onNameChange,
  onPhoneChange,
  onEmailChange,
  onSubmit,
}) => {
  const handleSubmit = (e) => {
    onSubmit();
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="contactForm">
        <input
          type="text"
          placeholder="Name"
          onChange={onNameChange}
          value={name}
          id="name"
          autoComplete="name"
        />
        <input
          type="tel"
          placeholder="(000) 000-0000"
          pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"
          onChange={onPhoneChange}
          value={phoneNumber}
          id="phoneNumber"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={onEmailChange}
          value={email}
          id="email"
          autoComplete="email"
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
