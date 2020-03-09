import React, { useState, useEffect } from "react";
import CallAPI from "../callAPI";
import Search from "./Search";
import List from "./List";

export default function Home() {
  const [restos, setRestos] = useState([]);
  const [years, setYears] = useState([]);
  const [filteredRestos, setFilteredRestos] = useState([]);

  useEffect(() => {
    let options = {
      method: "GET",
      url: "/TopRamen"
    };
    CallAPI(options)
      .then(data => {
        if (data.status !== 200) throw new Error(data.status);
        let restaurants = data.data;
        setYears(getYears(restaurants));
        setRestos(restaurants);
        setFilteredRestos(restaurants);
      })
      .catch(error => console.log(error));
    return () => {};
  }, []);
  let handleSearch = (year, country) => {
    let updatedRestos = [];
    country = country.toLowerCase();
    if (year != "" && country != "") {
      console.log("Year and country", year, country);
      updatedRestos = restos.filter(r => {
        if (r["Top Ten"] != "NaN") {
          let topten = parseInt(r["Top Ten"].split(" ")[0]);
          let rcountry = r.Country.toLowerCase();
          return (
            topten == year &&
            (country.includes(rcountry) || rcountry.includes(country))
          );
        }
      });
      setFilteredRestos(updatedRestos);
    } else if (year != "") {
      console.log("Year ", year);
      updatedRestos = restos.filter(r => {
        if (r["Top Ten"] != "NaN") {
          let topten = parseInt(r["Top Ten"].split(" ")[0]);

          return topten == year;
        }
      });
      setFilteredRestos(updatedRestos);
    } else if (country != "") {
      console.log("country", country);
      updatedRestos = restos.filter(r => {
        let rcountry = r.Country.toLowerCase();
        return country.includes(rcountry) || rcountry.includes(country);
      });
      setFilteredRestos(updatedRestos);
    } else {
      setFilteredRestos(restos);
    }
  };

  return (
    <div>
      <Search restos={restos} years={years} handleSearch={handleSearch} />
      <List restos={filteredRestos} />
    </div>
  );
}

let getYears = restos => {
  let years = restos
    .filter(resto => resto["Top Ten"] != "NaN")
    .map(resto => {
      return parseInt(resto["Top Ten"].split(" ")[0]);
    });
  let distinctYears = [...new Set(years)];
  return distinctYears;
};
