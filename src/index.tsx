import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { ThemeProvider } from "./context/ThemeContext";
import { LoginProvider } from "./context/LoginContext";
import { FavoriteProvider } from "./context/FavoritesContext";
import { CardProvider } from "./context/CardContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LoginProvider>
        <CardProvider>
          <FavoriteProvider>
            <App />
          </FavoriteProvider>
        </CardProvider>
      </LoginProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
