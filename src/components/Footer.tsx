import { FunctionComponent, useContext } from "react";
import styles from "./Footer.module.scss";

import { LoginContext } from "../context/LoginContext";
// import {
//   BsFillFunnelFill,
//   BsFillHeartFill,
//   BsCardHeading,
// } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const { user, logout } = useContext(LoginContext);

  const navigate = useNavigate();

  const onLogoutClick = () => {
    logout();
    navigate("/login");
  };
  return (
    <section className={styles.footer}>
      <ul className={styles.list}>
        <li>
          <Link to={"/home"} className={styles.links}>
            Home
          </Link>
        </li>
        {user && (
          <li>
            <Link to={"/favorites"} className={styles.links}>
              Favorites
            </Link>
          </li>
        )}

        <li>
          <Link to={"/about"} className={styles.links}>
            About
          </Link>
        </li>
        {user?.isBusiness && (
          <li>
            <Link to={"/my-cards"} className={styles.links}>
              My cards
            </Link>
          </li>
        )}

        {user && (
          <li>
            <Button onClick={onLogoutClick}> log out</Button>
          </li>
        )}
      </ul>
      <p className={styles.copyright}>Rotem Fuks @ 2023</p>
    </section>
  );
};

export default Footer;
