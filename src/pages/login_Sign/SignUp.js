import React, { useEffect, useState } from "react";
import "./auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { reset, signup } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Divider } from "@mui/material";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const { firstName, lastName, email, password, phoneNumber, confirmPassword } =
    input;

  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.password !== input.confirmPassword) {
      setError("Passowrd does not match");
      console.log(error);
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        confirmPassword,
      };
      dispatch(signup(userData));
      // console.log(user);
    }
  };
  useEffect(() => {
    if (isError) {
    }
    if (isSuccess) {
      toast("Wow so easy!");

      // navigate("/");
      // dispatch(reset());
    }
  }, [error, user, isError, isSuccess, message, isLoading]);

  return (
    <div className="sign_up_page">
      <Link to="/">
        <h2>KAZODO HEALTH</h2>
      </Link>
      <form onSubmit={handleSubmit}>
        <h3>Create An Account</h3>
        <Divider />

        <label>First Name:</label>
        <input
          placeholder="first name"
          name="firstName"
          type="text"
          value={firstName}
          onChange={handleInput}
          className="input"
        />
        <label>Last Name:</label>
        <input
          placeholder="last name"
          name="lastName"
          type="text"
          value={lastName}
          onChange={handleInput}
          className="input"
        />
        <label>Email:</label>
        <input
          placeholder="email address"
          name="email"
          type="email"
          value={email}
          onChange={handleInput}
          className="input"
        />
        <label>Phone Number:</label>
        <input
          placeholder="phone number"
          name="phoneNumber"
          type="number"
          value={phoneNumber}
          onChange={handleInput}
          className="input"
        />
        <label>Passowrd:</label>
        <input
          placeholder="password"
          name="password"
          type="password"
          value={password}
          onChange={handleInput}
          className="input"
        />
        <label>Confirm Password:</label>
        <input
          placeholder="confirm password"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleInput}
          className="input"
        />

        {/* <p hidden={!isError} className={isError ? "error" : "success"}>
          {message || error}
        </p> */}
        <p className="terms">
          By signing up you accept our terms and conditions & privacy policy
        </p>

        <button type="submit">
          {isLoading ? "Please wait..." : "Create Account"}
        </button>
        <hr />

        <p className="terms">Already have an Account?</p>
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
      </form>
    </div>
  );
}
