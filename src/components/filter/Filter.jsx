import React from "react";
import "../../assets/styles/components/filter/Filter.scss";

const Filter = () => {
  return (
    <div className="container">
      <div>
        <h2 className="principal-text">Encuentra tu empleo ideal</h2>
      </div>
      <div className="filter">
        <div className="input-search-text">
          <p className="text-filter">Cualquier término</p>
        </div>
      </div>
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="What are you looking for?" />
          <button type="submit" className="searchButton">
            <div className="search-solid icon"></div>
          </button>
        </div>
      </div>

      <div>
        <select name="ranking" id="ranking" className="ranking-form">
          <option value="">Select your ranking</option>
          <option value="$500 - $1000">$500 - $1000</option>
          <option value="$1000 - $2000">$1000 - $2000</option>
          <option value="$2000 - $5000">$2000 - $5000</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
