import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Resetpassword.css";
import ReactCodeInput from "react-code-input";
import { handleResetApi } from "../../services/apiServices";

const ResetPassword = () => {
  const [show, setShow] = useState(false);
  let location = useLocation();
  const query = new URLSearchParams(location.search);
  const [code, setCode] = useState("");
  const handleCodeChange = (e) => {
    setCode(e);
  };
  const Navigate = useNavigate();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const onSubmit = async (data) => {
    console.log(data, "HEllo there whats up");
    let resetApi = await handleResetApi({
      ...data,
      code: code,
      email: query.get("email"),
    });
    console.log(resetApi);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="resetPassword">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ReactCodeInput fields={4} onChange={handleCodeChange} />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="password"
          {...register("password", {
            required: true,
            pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
          })}
        />
        <br />
        <div className="repass">
          <input
            type={values.showPassword ? "text" : "password"}
            placeholder="Enter Your Conform Password"
            className="resetpassword"
            {...register("confirmPassword", {
              required: true,
              pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
            })}
          />
          <br />
          <button className="icon" onClick={(handleButton) => setShow(!show)} />
        </div>
        {errors.password && <p className="err">* Password doesn't match</p>}
        <button className="btn1" type="submit">
          Conform
        </button>
        <button
          className="btn1"
          onClick={() => {
            Navigate("/login");
          }}
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
