import lobsterImg from "./lobster.jpeg";
import { Link } from "react-router-dom";

/** Presentational component for Lobster */

function Lobster() {
  return (
    <div className="Lobster">
      <h2>Lobster time!</h2>
      <img src={lobsterImg}></img>
      <button><Link to='/'>go back</Link></button>
    </div>
  );
}

export default Lobster;