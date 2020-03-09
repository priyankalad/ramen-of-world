import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function List(props) {
  let { restos } = props;

  return (
    <div className="container">
      <div className="row"></div>
      <div className="row">
        {restos.map((resto, index) => (
          <Card key={index} resto={resto} />
        ))}
      </div>
    </div>
  );
}
