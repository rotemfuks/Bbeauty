import { useFormik } from "formik";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { checkUser } from "../services/userService";
import { errorMsg, successMsg } from "../services/feedbacksService";
import { LoginContext } from "../context/LoginContext";
import User from "../interfaces/User";

import styles from "./Login.module.scss";

function Login() {
  const { setUser } = useContext(LoginContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      password: yup
        .string()
        .required()
        .matches(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,32}$/,
          "Password must contain at least one digit, one lowercase letter, one uppercase letter, and one special character from [*.!@$%^&(){}[]:;<>,.?/~_+-=|\\] and be between 8 and 32 characters long"
        ),
    }),
    onSubmit(values) {
      checkUser(values as User)
        .then((res) => {
          if (res.data.length) {
            navigate("/home");
            successMsg(`youre logged in as ${values.email}`);
            setUser(res.data[0]);
          } else errorMsg("wrong email or password");
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <div className={styles.loginPage}>
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
      <Link to="/register">
        New here?<span className={styles.toRegister}> Register Here! </span>
      </Link>
    </div>
  );
}

export default Login;
