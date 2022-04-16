import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { updateProfile } from "firebase/auth";
import SocialMedia from "../Shared/SocialMedia/SocialMedia";
import { async } from "@firebase/util";
const Register = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const userRef = useRef("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = userRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    alert("update Profile");
  };

  if (user) {
    navigate("/");
  }

  // const updateUserDisplayName = async (name) => {
  //   const user = auth.currentUser;
  //   try {
  //     await user.updateProfile({
  //       displayName: name,
  //     });
  //   } catch (error) {
  //     console.log("updateUserDisplayName failed: ", error);
  //   }
  // };

  return (
    <div className="registration-form">
      <form onSubmit={handleRegister}>
        <div className="form-icon">
          <span>
            <i className="icon icon-user"></i>
          </span>
        </div>

        <div className="form-group">
          <input
            ref={userRef}
            type="text"
            className="form-control item"
            id="username"
            placeholder="Enter User Name"
            required
          />
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

        {/* conditional rendering */}

        <div className="form-group">
          <input
            disabled={!agree}
            type="submit"
            value="Register"
            className="btn btn-block create-account"
          />
        </div>
        <br />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept Genius Car Terms and Conditions
        </label>
      </form>

      <SocialMedia />

      <p className="text-primary">
        Already registered in Genius car service?
        <span>
          <button
            onClick={handleLogin}
            className="btn btn-danger border-0 ms-3 my-2"
          >
            Login Now
          </button>
        </span>
      </p>
    </div>
  );
};

export default Register;
