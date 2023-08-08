import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Register from "./components/Register";
import { Navigation } from "./components/Navigation";
import { useContext, useEffect } from "react";

import "./styles/main.scss";
import styles from "./styles/App.module.scss";
import { ThemeContext } from "./context/ThemeContext";
import Favorites from "./components/Favorites";
import { About } from "./components/About";
import MyCards from "./components/Cards";
import { BusinessCardForm } from "./components/BusinessCardForm";
import { CardContext } from "./context/CardContext";
import { BusinessPage } from "./components/Business";
import Footer from "./components/Footer";

function App() {
  const { theme } = useContext(ThemeContext);
  const { loadCards } = useContext(CardContext);

  useEffect(() => {
    loadCards();
  }, [loadCards]);

  return (
    <div className={`${styles.app} ${styles[theme]}`} data-bs-theme={theme}>
      <ToastContainer />
      <Router>
        <Navigation />
        <div className={styles.pageContent}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-cards" element={<MyCards />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/card-form" element={<BusinessCardForm />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
