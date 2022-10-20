import React, { useContext, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { placeContext } from "../App";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const placeHandler = () => {
    setCity(search);
  };

  const { setCity } = useContext(placeContext);
  return (
    <div className="Navbar">
      <img src="./images/icon.jpg" alt="icon img" />
      <h1>Weather Forecast</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={placeHandler}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
