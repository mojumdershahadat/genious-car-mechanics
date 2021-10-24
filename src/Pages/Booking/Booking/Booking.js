import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <h2>this is booking: {service.firstName}</h2>
      <h3>this is booking: {serviceId}</h3>
    </div>
  );
};

export default Booking;
