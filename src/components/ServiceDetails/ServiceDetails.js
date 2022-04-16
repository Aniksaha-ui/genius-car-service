import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  let param = useParams();

  return (
    <div>
      <h3>Hello Service : {param.id}</h3>
    </div>
  );
};

export default ServiceDetails;
