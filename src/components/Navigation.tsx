import { NavLink, useNavigate } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import styles from "./Navigation.module.scss";
import { ThemeButton } from "./ThemeButton";
import { useState } from "react";

interface NavbarProps {
  userInfo: any;
  setUserInfo: Function;
}

export function Navigation({ userInfo, setUserInfo }: NavbarProps) {
  const [isExpended, setIsExpended] = useState(false);
  const toggleIsExpended = () => {
    setIsExpended((prevState) => !prevState);
  };

  return (
    <Navbar expanded={isExpended} className={`${styles.navbar}`} expand="lg">
      <Navbar.Brand as={NavLink} to="/home" className={styles.logo}>
        Bboss
      </Navbar.Brand>

      <Navbar.Toggle onClick={toggleIsExpended} />

      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>

          {userInfo && (
            <>
              <Nav.Link as={NavLink} to="/favorites">
                Favorites
              </Nav.Link>

              {userInfo.isbusiness || userInfo.isAdmin ? (
                <Nav.Link as={NavLink} to="/cards">
                  My Cards
                </Nav.Link>
              ) : null}

              {userInfo.isAdmin ? (
                <Nav.Link as={NavLink} to="/sandbox">
                  Sandbox
                </Nav.Link>
              ) : null}
            </>
          )}
        </Nav>
        <ThemeButton />
      </Navbar.Collapse>
    </Navbar>
  );
}
