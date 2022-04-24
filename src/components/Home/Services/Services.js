import React, { useEffect, useState } from "react";
import useServices from "../../../Hooks/useServices";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useServices();

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary bg-light p-2">Our Services</h1>
      <div className="row row-cols-lg-3 row-cols-md-3 row-cols-1  g-2 g-lg-3 mt-1">
        {services.map((service) => (
          <SingleService service={service} key={service._id}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
