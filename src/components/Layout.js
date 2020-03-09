import React from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
        <div className="col-12">{props.children}</div>
      </div>
    </div>
  );
}
