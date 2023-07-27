import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import { useContext, useState } from "react";

import './styles/main.scss';
import styles from './App.module.scss';
import { ThemeContext } from "./context/ThemeContext";

function App() {
  let [userInfo, setUserInfo] = useState(
    JSON.parse(sessionStorage.getItem("userInfo") as string) == null
      ? { email: false, isAdmin: false }
      : JSON.parse(sessionStorage.getItem("userInfo") as string)
  );

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <ToastContainer />
      <Router>
        <Navbar userInfo={userInfo} setUserInfo={setUserInfo} />
        <Routes>
          <Route path="/" element={<Login setUserInfo={setUserInfo} />}></Route>
          <Route
            path="/register"
            element={<Register setUserInfo={setUserInfo} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
