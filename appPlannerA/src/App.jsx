import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./root/Root";
import ContactPage from "./contactPageComponent/contactPage";
import AppointmentPage from "./appointmentsPageComponent/AppointmentPage";
import "./App.css";

function App() {
  const [contactList, setContactList] = useState([]);
  const [appointmentList, setAppointmentList] = useState([]);

  const handleAddContact = (contactList) => {
    setContactList((prevContact) => [...prevContact, contactList]);
    console.log("updated contact?", contactList);
  };
  const handleRemoveContact = (indexToRemove) => {
    setContactList((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleAddAppointment = (appointmentList) => {
    console.log("Added appointment?", appointmentList);
    setAppointmentList((prevAppointments) => [
      ...prevAppointments,
      appointmentList,
    ]);
    console.log("Updating appointment?", appointmentList);
  };
  const handleRemoveAppointment = (indexToRemove) => {
    setAppointmentList((prev) =>
      prev.filter((_, idx) => idx !== indexToRemove)
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactPage
              contactList={contactList}
              onAdd={handleAddContact}
              handleRemoveContact={handleRemoveContact}
            />
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentPage
              appointmentList={appointmentList}
              addAppointment={handleAddAppointment}
              contactList={contactList}
              handleRemoveAppointment={handleRemoveAppointment}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
      <>
        <footer>Made by Alan</footer>
      </>
    </div>
  );
}

export default App;
