import React from "react";
import { Link } from "react-router-dom";

export default function RamenDetail(props) {
  let { match, location } = props;
  let variety_name = match.params.name;
  let resto, topten;
  if (location && location.restoProp) {
    resto = location.restoProp.resto;
    topten = resto["Top Ten"].split(" ");
  }
  //let { resto } = location ? location.restoProp : undefined;

  return (
    <div className="container mt-5">
      {resto ? (
        <>
          <div className="row">
            <h3 className="col-12">{variety_name}</h3>
          </div>

          <div className="row">
            <div className="col-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Country</td>
                    <td>{resto.Country}</td>
                  </tr>
                  <tr>
                    <td>Stars</td>
                    <td>{resto.Stars}</td>
                  </tr>
                  <tr>
                    <td>Style</td>
                    <td>{resto.Style}</td>
                  </tr>
                  <tr>
                    <td>Year</td>
                    <td>{topten[0]}</td>
                  </tr>
                  <tr>
                    <td>Rank</td>
                    <td>{topten[1]}</td>
                  </tr>
                </tbody>
              </table>
              {/* <p className="card-text">Country: {resto.Country}</p>
          <p className="card-text">Stars: {resto.Stars}</p>
          <p className="card-text">Style: {resto.Style}</p>
          <p className="card-text">Top Ten: {resto["Top Ten"]}</p> */}
            </div>
          </div>
          <div className="row">
            <Link to="/" className="btn btn-link">
              Back to List
            </Link>
          </div>
        </>
      ) : (
        <div className="row">
          <div className="col-12 text-center">
            This page is only available if you redirect from List page. Refresh
            or manual url entry won't work
          </div>
          <div className="col-12 text-center">
            <Link to="/" className="btn btn-link">
              Back to List
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
