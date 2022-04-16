import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
const SocialMedia = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  if (error) {
    toast(error.message);
  }
  if (error1) {
    toast(error1.message);
  }

  if (user1) {
    navigate("/");
  }

  if (user) {
    navigate("/");
  }

  const handleGoogleLogin = () => {
    signInWithGoogle();
    console.log(error);
  };

  const handleGithubLogin = () => {
    signInWithGithub();
    // console.log(user1);
  };

  return (
    <div className="social-media">
      <h5>Sign up with social media</h5>
      <ToastContainer />
      <div className="social-icons">
        <Link to="/">
          <i className="icon-social-facebook" title="Facebook"></i>
        </Link>
        <Link to="">
          <button
            onClick={handleGoogleLogin}
            className="icon-social-google border-0"
            title="Google"
          ></button>
        </Link>
        <Link to="">
          <button
            onClick={handleGithubLogin}
            className="icon-social-github border-0"
            title="Google"
          ></button>
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
