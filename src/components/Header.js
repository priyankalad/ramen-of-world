import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-default bg-primary ">
      <div className="container-fluid">
        <div className="navbar-header ">
          <Link className="navbar-brand text-white" to="/">
            Ramen of the World
          </Link>
        </div>
      </div>
    </nav>
  );
}
