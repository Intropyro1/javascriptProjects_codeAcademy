import { Outlet, NavLink } from "react-router-dom";
import "./root.css";

export const ROUTES = {
  CONTACTS: "/contacts",
  APPOINTMENTS: "/appointments",
  TILE: "/tile",
};

function Root() {
  return (
    <div className="nav nav-pills">
      <nav className="nav-item">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "nav-link active" : "nav-link"
          }
          to={ROUTES.CONTACTS}
        >
          Contacts
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "nav-link active" : "nav-link"
          }
          to={ROUTES.APPOINTMENTS}
        >
          Appointments
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Root;
