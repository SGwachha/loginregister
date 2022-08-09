import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginApiService } from "../../services/apiServices";

const Login = () => {
  const [show, setShow] = useState(false);

  const Navigate = useNavigate();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    let loginApi = await loginApiService(data);
    if (loginApi.type === "error") {
      toast.error(loginApi.msg);
    } else {
      toast.success("Logged in successfully");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter Your username"
          className="email"
          {...register("username", { required: true })}
        />
        <br />
        <div className="pass">
          <input
            type={values.showPassword ? "text" : "password"}
            placeholder="Password"
            className="password"
            {...register("password", {
              required: true,
              pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
            })}
          />
          <br />
          <button className="icon" onClick={(handleButton) => setShow(!show)} />
        </div>
        {errors.password && <p className="err">
        *password should contain atleast one 'special character' one
            'capital letter' and one 'number'</p>}
        <ToastContainer autoClose={1000} />
        <button className="submit" type="submit">
          Login
        </button>
        <button
          className="btn1"
          onClick={() => {
            Navigate("/register");
          }}
        >
          Don't have account? Sign up
        </button>
        <button
          className="btn1"
          onClick={() => {
            Navigate("/forget");
          }}
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default Login;
