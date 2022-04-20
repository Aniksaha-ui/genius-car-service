import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const EmailVerification = () => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  return (
    <div>
      <h3>Your Email is not Verified</h3>
      <button
        className="btn btn-primary"
        onClick={async () => {
          await sendEmailVerification();
          toast("Sent email");
        }}
      >
        Send Verify email Again
      </button>
      <ToastContainer />
    </div>
  );
};

export default EmailVerification;
