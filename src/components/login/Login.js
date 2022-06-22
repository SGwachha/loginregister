import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [isoff, setIsoff] = useState(false);
  const [show, setShow] = useState(false);
  const handleButton = () => {
    setIsoff(isoff);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

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
  const onSubmit = (data) => {
    if (data.cpassword === data.password) {
      toast.success("Sucessfully Register", {
        position: toast.POSITION.TOP_CENTER,
      });
      Navigate("/landingpage");
    } else {
      toast.error("requirements not fulfill", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="email"
          {...register(
            "email",
            { required: true },
            { pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ }
          )}
        />
        <br />
        <div className="pass">
          <input
            type={values.showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            className="password"
            {...register(
              "password",
              { required: true, 
                pattern:
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
              }
            )}
          />
          <br />
          <button className="icon" onClick={(handleButton) => setShow(!show)}>
            {show ? (
              <VisibilityOffIcon />
            ) : (
              <VisibilityIcon onClick={handleClickShowPassword} />
            )}
          </button>
        </div>
        {errors.password && <p className="err">* Required are not met</p>}
        <div className="pass">
          <input
            type={"password"}
            placeholder="Confirm Password"
            className="cpassword"
            {...register("cpassword", { required: true })}
          />
          <br />
        </div>
        <ToastContainer autoClose={1000} />
        <button className="submit" type="submit">
          SignIn
        </button>
        <button
          className="btn1"
          onClick={() => {
            Navigate("/register");
          }}
        >
          Don't have an account? Register here
        </button>
      </form>
    </div>
  );
};

export default Login;
