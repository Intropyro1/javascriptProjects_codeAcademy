import React from "react";
import "./Tile.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const Tile = ({
  name,
  description,
  type,
  handleRemoveContact,
  handleRemoveAppointment,
  index,
}) => {
  console.log("Rendering Tile with name:", { name }, "and description:", {
    description,
  });
  //Check if the name is matching another name to prevent duplicates

  const [ampm, setAmPm] = React.useState("AM");
  const navigate = useNavigate();

  const handleRemoveAndNavigateForContact = () => {
    navigate("/contacts");
    console.log("Deletion and Attempting to route!");
    handleRemoveContact(index);
    console.log("success");
    navigate("/contacts");
  };
  const handleRemoveAndNavigateForAppointment = () => {
    navigate("/appointments");
    console.log("Deletion and Attempting to route!");
    handleRemoveAppointment(index);
    console.log("success");
    navigate("/appointments");
  };

  return (
    <div className="tileDisplay" id="tileDisplayAppointment">
      {type === "contact" ? (
        <>
          <button
            className="contactRemovalButton"
            onClick={handleRemoveAndNavigateForContact}
          >
            {" "}
            X
          </button>
          <p className="contactName">Name: {Object.values(name)}</p>
          <section className="contact-tile-description">
            <p className="contactNumber">
              Phone Number: {Object.values(description.phone)}
            </p>
            <p className="contactEmail">
              Email: {Object.values(description.email)}
            </p>
            {console.log(description.email)}
            {console.log(description.phone)}
          </section>
        </>
      ) : type === "appointment" ? (
        <>
          <section className="card w-50 appointment-tile-description">
            <button
              className="appointmentRemovalButton"
              onClick={() => handleRemoveAndNavigateForAppointment}
            >
              {" "}
              X
            </button>
            <span className="card-body">
              <p className="card-text">
                Date: {Object.values(description.date)}
              </p>
              <p className="card-text">
                Time: {Object.values(description.time)}
                <select
                  value={ampm}
                  onChange={(e) => setAmPm(e.target.value)}
                  name={ampm}
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </p>
              <p className="card-text">
                For Whom: {Object.values(description.contact)}
              </p>
              <p className="card-title appointmentPurpose">
                Reason: {Object.values(name)}
              </p>
              {console.log(Object.values(description))}
            </span>
          </section>
        </>
      ) : null}
    </div>
  );
};

export default Tile;
