import React, { useState } from "react";
import Tilelist from "../TilelistComp/tileList";
import AppointmentForm from "../appointmentFormComponent/AppointmentForm";
import { useNavigate } from "react-router-dom";

const AppointmentPage = ({
  appointmentList,
  addAppointment,
  contactList,
  handleRemoveAppointment,
}) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/appointments");
    addAppointment({
      name,
      date,
      time,
      contact,
    });
    setName("");
    setDate("");
    setTime("");
    setContact("");
    console.log("new appointment", appointmentList);
    navigate("/appointments");
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onContactChange = (e) => {
    setContact(e.target.value);
  };
  const onDateChange = (e) => {
    setDate(e.target.value);
  };
  const onTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className="card appointmentPageDisplay">
      <section className="card-body appointmentSection">
        <h2 className="card-title">Appointments</h2>
        <Tilelist
          items={appointmentList}
          type="appointment"
          handleRemoveAppointment={handleRemoveAppointment}
        />
      </section>
      <section className="addAppointment">
        <h2>Add Appointments</h2>
        <AppointmentForm
          name={name}
          date={date}
          time={time}
          contact={contact}
          contactsArray={contactList}
          onNameChange={onNameChange}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
          onContactChange={onContactChange}
          onSubmit={handleSubmit}
        />
      </section>
    </div>
  );
};

export default AppointmentPage;
