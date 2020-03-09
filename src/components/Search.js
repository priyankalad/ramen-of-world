import React, { useState, useEffect } from "react";

export default function Search(props) {
  let { restos, years, handleSearch } = props;

  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");

  let handleChange = event => {
    let elementId = event.target.id;
    let value = event.target.value;
    switch (elementId) {
      case "searchByCountry":
        setCountry(value);
        break;
      case "searchByYear":
        setYear(value);
        break;
      default:
        setCountry("");
        setYear("");
        break;
    }
  };

  return (
    <div className="col-6">
      <select
        id="searchByYear"
        className="form-control d-inline w-25 m-3"
        onChange={handleChange}
      >
        <option value="">Select Year</option>
        {years.map(y => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
      <input
        id="searchByCountry"
        type="text"
        onChange={handleChange}
        className="form-control d-inline w-25"
        placeholder="Country"
      />
      <button
        className="btn btn-primary m-3"
        onClick={() => handleSearch(year, country)}
      >
        Search
      </button>
    </div>
  );
}
