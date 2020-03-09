import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function Card(props) {
  let { resto } = props;
  let topten = resto["Top Ten"].split(" ");
  return (
    <div className="card col-lg-4" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{resto.Variety}</h5>
        <StarRating rating={resto.Stars}  />
        <br />
        <p className="card-text">Brand: {resto.Brand}</p>
        <p className="card-text">Country: {resto.Country}</p>
        <p className="card-text">Year: {topten[0]}</p>
        <p className="card-text">Rank: {topten[1]}</p>

        <Link
          to={{
            pathname: `/detail/${resto.Variety}`,
            restoProp: { resto: resto }
          }}
          className="btn btn-primary"
        >
          Detail
        </Link>
      </div>
    </div>
  );
}
