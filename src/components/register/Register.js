import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ReCAPTCHA from "react-google-recaptcha";
// import emailjs from "emailjs-com";

const Register = () => {
  const form = useRef();

  //   const formsubmitted = (e) => {
  //     e.preventDefault();
  //     emailjs
  //       .sendForm(
  //         "service_sm8cxds",
  //         "template_e2j82vm",
  //         form.current,
  //         "B5GCwDzOMfHDEcva2"
  //       )
  //       .then(
  //         (result) => {
  //           alert("Your Email has been Sent!");
  //         },
  //         (error) => {
  //           console.log("Your Email wasn't Sent");
  //         }
  //       );
  //   };

  //   const [isoff, setIsoff] = useState(false);
  const [show, setShow] = useState(false);

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

  const handleOnChange = () => {
    // console.log("hey");
  };

  const onSubmit = (data) => {
    if (data.cpassword === data.password) {
      toast.success("Sucessfully Register", {
        position: toast.POSITION.TOP_CENTER,
        // show: true,
        // autoClose: 1000
      });
      Navigate("/landingpage");
    } else {
      toast.error("requirements not fulfill", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter Your UserName"
          className="username"
          {...register("username", { required: true })}
        />
        <br />
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
            type={values.showPassword ? "password" : "password"}
            placeholder="Enter Your Password"
            className="password"
            {...register("password", {
              required: true,
              pattern:
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
            })}
          />
          <br />
          <button className="icon" onClick={() => setShow(!show)}>
            {show ? (
              <VisibilityOffIcon />
            ) : (
              <VisibilityIcon onClick={handleClickShowPassword} />
            )}
          </button>
          <br/>
        </div>
        {errors.password && <p className="err">* Required are not met</p>}
        <input
          type={"password"}
          placeholder="Confirm Password"
          className="cpassword"
          {...register("cpassword", { required: true })}
        />
        <br />
        <ReCAPTCHA
          className="captcha"
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={handleOnChange}
        />
        <button className="submit" type="submit">
          {" "}
          SignUp
        </button>
        <button
          className="btn1"
          onClick={() => {
            Navigate("/login");
          }}
        >
          Already have an account? Login here
        </button>
        <ToastContainer autoClose={1000} />
      </form>
    </div>
  );
};

export default Register;
