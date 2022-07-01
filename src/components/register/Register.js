import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ReCAPTCHA from "react-google-recaptcha";
import { registerApiService } from "../../services/apiServices";
import { toast } from "react-toastify";

const Register = () => {
  const [show, setShow] = useState(false);
  const [captcha, setCaptcha] = useState("");

  const onChange = (value) => {
    setCaptcha(value);
    console.log("captcha value : ", value);
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
  const onSubmit = async (data) => {
    console.log(data,"HEllo there whats up")

    let dataToSend = await registerApiService({
      ...data,
      token: captcha,
    });
   if(dataToSend.type === "error"){
    toast.error(dataToSend.msg)
   }
   else{
        toast.success("Sucessfully Register")
   }
  };


  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="name"
          placeholder="Name"
          {...register("name", { required: true })}
        />
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
              pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
            })}
          />
          <br />
          <button className="icon" onClick={(handleButton) => setShow(!show)}>
            {show ? (
              <VisibilityOffIcon />
            ) : (
              <VisibilityIcon onClick={handleClickShowPassword} />
            )}
          </button>
          <br />
        </div>
        {errors.password && <p className="err">* Required are not met</p>}
        <br />
        <ReCAPTCHA
          className="captcha"
          sitekey="6LdrqaYgAAAAAFCdWsFT8-4sloxvrzHcIBXL9zYN"
          onChange={onChange}
        />
        <button className="submit" type="submit" disabled={captcha === " "}>
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
        <button className="btn1"
         onClick={() => {
          Navigate("/reset");
        }}
        >Reset Password</button>
      </form>
    </div>
  );
};

export default Register;
