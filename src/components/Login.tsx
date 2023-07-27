import { useFormik } from "formik";
import { FunctionComponent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { checkUser } from "../services/userService";
import { errorMsg, successMsg } from "../services/feedbacksService";

interface LoginProps {
  setUserInfo: Function;
}

const Login: FunctionComponent<LoginProps> = ({ setUserInfo }) => {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit(values) {
      checkUser(values)
        .then((res) => {
          if (res.data.length) {
            navigate("/home");
            successMsg(`youre logged in as ${values.email}`);

            sessionStorage.setItem(
              "userInfo",
              JSON.stringify({
                email: res.data[0].email,
                isAdmin: res.data[0].isAdmin,
                userId: res.data[0].id,
              })
            );

            setUserInfo(
              JSON.parse(sessionStorage.getItem("userInfo") as string)
            );
          } else errorMsg("wrong email or password");
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <>
      <div className="container col-md-3">
        <form onSubmit={formik.handleSubmit}>
          <h3 className="display-3">Login</h3>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <label htmlFor="floatingInput">Email address</label>
            {formik.touched.email && formik.errors.email && (
              <small className="text-danger">{formik.errors.email} </small>
            )}
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <label htmlFor="floatingPassword">Password</label>
            {formik.touched.password && formik.errors.password && (
              <small className="text-danger">{formik.errors.password} </small>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-secondary my-3 w-100"
            disabled={!formik.isValid || !formik.dirty}
          >
            Login
          </button>
        </form>
        <Link to="/register">New here? Register Here!</Link>
      </div>
    </>
  );
};

export default Login;
