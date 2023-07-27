import { FunctionComponent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import styles from "./Navbar.module.scss";
import { ThemeButton } from "./ThemeButton";

interface NavbarProps {
  userInfo: any;
  setUserInfo: Function;
}

const Navbar: FunctionComponent<NavbarProps> = ({ userInfo, setUserInfo }) => {
  let navigate = useNavigate();
  let logout = () => {
    sessionStorage.removeItem("userInfo");
    setUserInfo({ email: false, isAdmin: false });
    navigate("/");
  };

  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/home" className={styles.logo}>
          Bboss
        </NavLink>

        <div className={styles.link}>
          <NavLink to="/cards">Cards</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </div>

        <ThemeButton />
        {/* {(userInfo.email) && (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    Cart
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                {/* <button className="btn btn-outline-primary" onClick={logout}>
                  Log Out
                </button> 
                <Button variant="primary" onClick={logout}>
                  Log out
                </Button>
              </form>
            </div>
          )} */}
      </nav>
    </>
  );
};

export default Navbar;
