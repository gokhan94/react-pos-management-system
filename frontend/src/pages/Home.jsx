import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <header>
        <div className="circle"></div>
        <div className="circles"></div>
        <a href="/" className="logo">
          Pos<span>Management</span>
        </a>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </header>
      <div className="texts">
        <h1>
          POS <span>System</span>
        </h1>
        <p>
          - Easy to manage interface.
          <br />
          - Ability to easily track and categorize products. <br />- Creating
          orders and invoicing created orders.
          <br />- Ability to edit and delete products and orders according to
          authorization status.
        </p>
      </div>
      <div className="background_image">
        <img src={require("../images/pos-bg.png")} alt="..." />
      </div>
    </section>
  );
};

export default Home;
