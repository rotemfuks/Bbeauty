import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Register from "./components/Register";
import { Navigation } from "./components/Navigation";
import { useContext } from "react";

import "./styles/main.scss";
import styles from "./App.module.scss";
import { ThemeContext } from "./context/ThemeContext";
import Favorites from "./components/Favorites";
import { About } from "./components/About";
import Cards from "./components/Cards";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.app} ${styles[theme]}`} data-bs-theme={theme}>
      <ToastContainer />
      <Router>
        <Navigation />
        <div className={styles.pageContent}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
