import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { toast } from 'react-toastify';
import './Resetpassword.css'


const ResetPassword = () => {

    const [show, setShow] = useState(false);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const Navigate = useNavigate();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const onSubmit = (data) => {
    // if (data.cpassword === data.password) {
    //   toast.success("Sucessfully Register", {
    //     position: toast.POSITION.TOP_CENTER,
    //   });
    //   Navigate("/landingpage");
    // } else {
    //   toast.error("requirements not fulfill", {
    //     position: toast.POSITION.BOTTOM_CENTER,
    //   });
    // }
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

//   const onSubmit = (data) => {
//     if (data.cpassword === data.password) {
//       toast.success("Sucessfully Register", {
//         position: toast.POSITION.TOP_CENTER,
//       });
//       Navigate("/landingpage");
//     } else {
//       toast.error("requirements not fulfill", {
//         position: toast.POSITION.BOTTOM_CENTER,
//       });
//     }
//   };

  return (
    <div className="resetPassword">
        <h2>Reset Password</h2>
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
        <div className="repass">
          <input
            type={values.showPassword ? "text" : "password"}
            placeholder="Enter Your New Password"
            className="resetpassword"
            {...register(
              "resetpassword",
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
        <button className="btn1" type="submit">
          Reset
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
  )
}

export default ResetPassword