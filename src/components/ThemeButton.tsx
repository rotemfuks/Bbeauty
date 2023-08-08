import { useContext } from "react";
import { Button } from "react-bootstrap";
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

import styles from "../styles/ThemeButton.module.scss";

export function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme} className={styles.themeButton}>
      {theme === "light" ? <BsFillSunFill /> : <FaMoon />}
    </Button>
  );
}
