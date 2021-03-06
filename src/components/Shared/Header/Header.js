import React from "react";
import CustomLink from "../../CustomLink/CustomLink";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <CustomLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </CustomLink>
              </li>

              <li className="nav-item">
                <CustomLink className="nav-link" to="/services">
                  Services
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link" to="/about">
                  About
                </CustomLink>
              </li>

              {!user ? (
                <li className="nav-item">
                  <CustomLink className="nav-link" to="/login">
                    Login
                  </CustomLink>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <CustomLink className="nav-link" to="/manage">
                      Service Management
                    </CustomLink>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={() => signOut(auth)}
                      className="btn btn-danger"
                      to="/register"
                    >
                      logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- nav section  --> */}
    </div>
  );
};

export default Header;
