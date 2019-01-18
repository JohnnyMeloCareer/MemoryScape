import React from "react";
import "./Header.css";

const Header = props => (
    <div className="headContent">
        <div className="container">
            <h1 className="display-4">Click Scape</h1>
            <p className="lead">Total of 12 skills! Pick all of them without repeating any to win the game.</p>
        </div>
    </div>
);

export default Header;