import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("")

  const { email, password } = input;

  useEffect(() => {
    // if (isError) {
    //  toast(`Error: ${message}`);
    // }
     if(isSuccess) {
      toast(`Welcome back ${user.firstName}`);
      navigate("/");
      dispatch(reset());
    }
  }, [user, isError, isSuccess, message, isLoading]);
  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if(!email || !password){
    //   setError("Please fill all details")
    //   console.log(error);
    // }
    // else{
    //   setError(null);

      const userData = { email, password };
      dispatch(login(userData));
    // }
  };

  return (
    <div className="sign_up_page">
      <Link to="/">
        <h2>KAZODO HEALTH</h2>
      </Link>
      <form onSubmit={handleSubmit}>
        <h3>Please Log in to continue</h3>
        <Divider />
        <label>Email:</label>

        <input
          className="input"
          placeholder="email address"
          name="email"
          type="email"
          value={email}
          onChange={handleInput}
        />
        <label>Password:</label>

        <input
          className="input"
          placeholder="password"
          name="password"
          type="password"
          value={password}
          onChange={handleInput}
        />
        {/* <p>
          {error}
        </p> */}

        <button type="submit">{isLoading ? "Please Wait..." : "Login"}</button>
        <p className="terms">Already have an Account?</p>
        <Link to="/signup">
          <button className="login">Create Account</button>
        </Link>
      </form>
    </div>
  );
}
