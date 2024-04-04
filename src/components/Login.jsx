import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log("loginvalues", values);
    navigate("/sidebar");
  };

  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  };

  return (
    <div className="login_form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login form</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          {...register("username")}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          {...register("password")}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        <button
          style={{
            color: "black",
            border: "20px",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </button>
      </p>
    </div>
  );
}

export default Login;
