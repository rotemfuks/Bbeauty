import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Register from "./components/Register";
import { Navigation } from "./components/Navigation";
import { useContext, useState } from "react";

import './styles/main.scss';
import styles from './App.module.scss';
import { ThemeContext } from "./context/ThemeContext";
import Favorites from "./components/Favorites";
import { About } from "./components/About";
import Cards from "./components/Cards";

const USER = {
  name: "rotem fuks",
  email: "bar74064@gmail.com",
  phone: "0547424641",
  password: "123456789",
  isAdmin: false,
  isbusiness: true,
  id: 1,
};

function App() {
  const [userInfo, setUserInfo] = useState(USER);

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.app} ${styles[theme]}`} data-bs-theme={theme}>
      <ToastContainer />
      <Router>
        <Navigation userInfo={userInfo} setUserInfo={setUserInfo} />
        <Routes>
          <Route path="/" element={<Login setUserInfo={setUserInfo} />} />
          <Route
            path="/register"
            element={<Register setUserInfo={setUserInfo} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
