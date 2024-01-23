import lemonadeImg from "./lemonade.jpeg";
import { Link } from "react-router-dom";

/** Presentational component for Lemonade */

function Lemonade() {
  return (
    <div className="Lemonade">
      <h2>Lemonade on a sour day!</h2>
      <img src={lemonadeImg}></img>
      <button><Link to='/'>go back</Link></button>
    </div>
  );
}


export default Lemonade;