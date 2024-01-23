import { NavLink } from "react-router-dom";
import "./Navbar.css";

/** Navbar component for sitewide navbar */

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li><NavLink to='/pizza'>Pizza</NavLink></li>
          <li><NavLink to='/lemonade'>Lemonade</NavLink></li>
          <li><NavLink to='/lobster'>Lobster</NavLink></li>
      </ul>

      </nav>
    </div>
  )
}

export default Navbar;