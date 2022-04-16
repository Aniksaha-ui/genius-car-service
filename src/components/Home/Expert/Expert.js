import React from "react";

const Expert = (props) => {
  const { name, img } = props.expert;
  return (
    <div className="col">
      <div className="p-2 border bg-light">
        <div className="card-group ">
          <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
