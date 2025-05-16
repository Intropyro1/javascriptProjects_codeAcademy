import React from "react";
import ContactPicker from "../contactPickerComponent/ContactPicker";

import "./appointmentForm.css";

const getTodayString = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};
const AppointmentForm = ({
  name,
  date,
  time,
  contact,
  onNameChange,
  onDateChange,
  onTimeChange,
  onContactChange,
  onSubmit,
  contactsArray,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        id="appointmentForm"
        encType="multipart/form-data"
      >
        <input
          type="text"
          placeholder="Reason of appointment"
          aria-label="Reason of appointment"
          onChange={onNameChange}
          value={name}
          id="appointmentPurpose"
          className="form-control"
        />
        <input
          type="date"
          name="date"
          min={getTodayString()}
          value={date}
          onChange={onDateChange}
          placeholder="Date"
          className="form-control"
        />
        <input
          type="time"
          name="time"
          value={time}
          onChange={onTimeChange}
          placeholder="time"
          min="8:00"
          max="17:00"
          className="form-control"
        />
        <button type="submit">Add Appointment</button>
      </form>
      <ContactPicker
        contactsArray={contactsArray}
        onChange={onContactChange}
        value={contact}
      />
    </div>
  );
};

export default AppointmentForm;
