import React, { useState } from "react";
import Tile from "../TileComponent/Tile";
import "./tileList.css";

const Tilelist = ({
  items,
  type,
  handleRemoveAppointment,
  handleRemoveContact,
}) => {
  console.log("Rendering TileList with items:", items);

  return (
    <div>
      <ul className="tileListDisplay">
        {items &&
          items.map(({ name, ...rest }, index) => (
            <ul key={index}>
              <Tile
                name={name}
                description={rest}
                type={type}
                handleRemoveAppointment={handleRemoveAppointment}
                handleRemoveContact={handleRemoveContact}
                index={index}
              />
            </ul>
          ))}
      </ul>
    </div>
  );
};

export default Tilelist;
