import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };
  const handleForgotPassword = () => {
    navigate("/login");
  };

  return (
    <div className="forgot-password-container">
      <div
        className="custom-modal-content"
        style={{ maxHeight: "70vh", overflowY: "auto", color: "purple" }}
      >
        <h2 className="forgot-password-heading">
          Did you forget your password?
        </h2>
      </div>

      <p>
        Enter your email address and we'll send you a link to restore password
      </p>
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <label className="forgot-password-label" htmlFor="email">
          Email Address:
        </label>
        <input
          className="forgot-password-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="forgot-password-button" type="submit">
          Request Reset Link
        </button>
        <br />
        <button className="forgotbtn" onClick={handleForgotPassword}>
          Back to login
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
