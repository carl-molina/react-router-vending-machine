import { NavLink } from "react-router-dom";
import "./Navbar.css";

/** Navbar component for sitewide navbar */

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <ul>
        <li>
          <NavLink
            to='/pizza'
            className={({ isActive }) =>
              isActive ? "active" : "inactive"
            }
          >
              Pizza
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/lemonade'
            className={({ isActive }) =>
              isActive ? "active" : "inactive"
            }
          >
              Lemonade
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/lobster'
            className={({ isActive }) =>
              isActive ? "active" : "inactive"
            }
          >
              Lobster
          </NavLink>
        </li>
      </ul>

      </nav>
    </div>
  )
}

export default Navbar;