import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import SocialMedia from "../Shared/SocialMedia/SocialMedia";
import { ToastContainer, toast } from "react-toastify";
import { async } from "@firebase/util";
import PageTitle from "../Shared/PageTitle/PageTitle";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    toast(error?.message);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    // console.log(user);
  };

  const handleRegisterNow = (e) => {
    navigate("/register");
  };

  const handleForgetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Check your email.Reset link send");
  };

  return (
    <>
      <PageTitle title="Login"></PageTitle>
      <div className="registration-form">
        <form onSubmit={handleSubmit}>
          <div className="form-icon">
            <span>
              <i className="icon icon-user"></i>
            </span>
          </div>

          <div className="form-group">
            <input
              ref={emailRef}
              type="text"
              className="form-control item"
              id="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              ref={passwordRef}
              type="password"
              className="form-control item"
              id="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Login"
              className="btn btn-block create-account"
            />
          </div>
          <br />
        </form>

        <ToastContainer />
        <SocialMedia />

        <p className="text-primary">
          New in Genius car service?
          <span>
            <button
              onClick={handleRegisterNow}
              className="btn btn-danger border-0 ms-3 my-2"
            >
              Register Now
            </button>
          </span>
        </p>

        <p className="text-primary">
          Forget Password
          <span>
            <button
              onClick={handleForgetPassword}
              className="btn btn-danger border-0 ms-3 my-2"
            >
              Forget Password?
            </button>
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
