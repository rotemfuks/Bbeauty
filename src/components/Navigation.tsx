import { NavLink, useNavigate } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";

import styles from "./Navigation.module.scss";
import { ThemeButton } from "./ThemeButton";
import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

export function Navigation() {
  const [isExpended, setIsExpended] = useState(false);
  const toggleIsExpended = () => {
    setIsExpended((prevState) => !prevState);
  };

  const navigate = useNavigate();
  const { user, logout } = useContext(LoginContext);

  const onLogoutClick = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar expanded={isExpended} className={`${styles.navbar}`} expand="lg">
      <Navbar.Brand as={NavLink} to="/home" className={styles.logo}>
        Bbeauty
      </Navbar.Brand>

      <Navbar.Toggle onClick={toggleIsExpended} />

      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>

          {user && (
            <>
              <Nav.Link as={NavLink} to="/favorites">
                Favorites
              </Nav.Link>

              {user.isBusiness && (
                <Nav.Link as={NavLink} to="/my-cards">
                  My Cards
                </Nav.Link>
              )}

              {user.isAdmin && (
                <Nav.Link as={NavLink} to="/sandbox">
                  Sandbox
                </Nav.Link>
              )}
            </>
          )}
        </Nav>

        <div className={styles.actions}>
          {!user ? (
            <>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            </>
          ) : (
            <>
              <div>{user.name}</div>
              <Button onClick={onLogoutClick} className={styles.logoutButton}>
                Logout
              </Button>
            </>
          )}
          <ThemeButton />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
