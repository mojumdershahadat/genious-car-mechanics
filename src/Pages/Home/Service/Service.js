import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  // const {service} = props;
  const { _id, firstName, price, description, img } = service;
  return (
    <div className="service pb-3">
      <img src={img} alt="" />
      <h3>{firstName}</h3>
      <h5>Price: {price}</h5>
      <p className="px-3">{description}</p>
      <Link to={`/booking/${_id}`}>
        <button className="btn btn-warning">
          Book {firstName.toLowerCase()}
        </button>
      </Link>
    </div>
  );
};

export default Service;
