import React from "react";
import useServices from "../../Hooks/useServices";

const ManageService = () => {
  const [services, setServices] = useServices();
  const handleDeleteService = (id) => {
    const url = `http://localhost:4000/service/${id}`;
    const confirm = window.confirm("Are You Sure?");
    if (confirm) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data deleted", data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    } else {
    }
  };
  return (
    <>
      <h3 className="mt-3">Services -{services.length}</h3>
      <div className="d-flex align-items-center justify-content-center mt-3">
        <table
          id="example"
          fa
          className="table table-bordered border-primary border-3"
          style={{ width: "1080px" }}
        >
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Description</th>
              <th>image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <>
                <tr>
                  <td>{service.name}</td>
                  <td>{service.description.slice(0, 30)}</td>
                  <td>
                    <img
                      width="90px"
                      className="img-fluid"
                      src={service.img}
                      alt=""
                    />
                  </td>
                  <td>{service.price}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteService(service._id)}
                      className="btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageService;
