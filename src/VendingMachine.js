import { Link } from "react-router-dom";

/** Presentational component for Vending Machine */

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>What would you like to buy?</h1>
      <p><Link to="/pizza">Pizza</Link></p>
      <p><Link to="/lemonade">Lemonade</Link></p>
      <p><Link to="/lobster">Lobster</Link></p>
    </div>
  )
}


export default VendingMachine;