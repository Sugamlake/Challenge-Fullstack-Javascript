import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ShowBalance from "./ShowBalance";

import "./Main.css";

const Main = ({ movements }) => {
  return (
    <Fragment>
      <div className="main">
        <h1>Budget Administrator</h1>
        <div className="container">
          <Link to={"/new"} className="button button-primary add-movement">
            Add Movement
          </Link>
        </div>
      </div>

      <ShowBalance movements={movements} className="showBalance" />
    </Fragment>
  );
};

export default Main;
