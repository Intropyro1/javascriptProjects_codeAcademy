import React from "react";

const ContactPicker = ({ contactsArray, onChange, value, name }) => {
  return (
    <div>
      <select
        onChange={onChange}
        value={value}
        name={name}
        multiple={false}
        size={0}
        title="Select Contact"
        id="contactPicker"
      >
        <option name="Default" value={"No Contact"}>
          No Contact Selected
        </option>
        {contactsArray &&
          contactsArray.map((contact, index) => {
            return (
              <option key={index} value={contact.name}>
                {contact.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default ContactPicker;
