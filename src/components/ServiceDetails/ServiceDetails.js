import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  let param = useParams();
  const id = param.id;
  const navigate = useNavigate();
  const [serviceDetails, setServiceDetails] = useState({});
  const url = `http://localhost:4000/service/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  const handleCheckoutPage = () => {
    console.log("clicked");
    navigate("/checkout");
  };

  return (
    <div>
      <h3>Hello Service : {serviceDetails.name}</h3>
      <button onClick={handleCheckoutPage} className="btn-success">
        Checkout
      </button>
    </div>
  );
};

export default ServiceDetails;
