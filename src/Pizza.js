import pizzaImg from "./pizza.jpeg";
import { Link } from "react-router-dom";

/** Presentational component for Pizza */

function Pizza() {
  return (
    <div className="Pizza">
      <h2>Pizza time!!</h2>
      <img src={pizzaImg}></img>
      <button><Link to='/'>go back</Link></button>
    </div>
  )
}

export default Pizza;