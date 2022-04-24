import React from "react";
import { useNavigate } from "react-router-dom";

const SingleService = (props) => {
  const { _id, name, description, price, img } = props.service;

  const navigate = useNavigate();
  const handleShowDetails = (_id) => {
    navigate(`/service/${_id}`);
  };

  return (
    <div className="col">
      <div className="p-2 border bg-primary">
        <div className="card-group ">
          <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <p className="card-text mt-2">{description}</p>
              <h6 className="card-text">Service Charge :{price}</h6>
              <div className="align-item-center justify-content-center">
                <button
                  onClick={() => handleShowDetails(_id)}
                  className="btn-danger"
                >
                  Show Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
