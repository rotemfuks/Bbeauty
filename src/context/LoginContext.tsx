import React, { createContext, useState, useContext } from "react";
import User from "../interfaces/User";

interface LoginContextType {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const LoginContext = createContext<LoginContextType>({
  user: null,
  setUser: () => {},
  logout: () => {},
});

export function LoginProvider({ children }: { children: React.ReactNode }) {
  const [user, _setUser] = useState<User | null>(null);

  const setUser = (user: User) => {
    _setUser(user);
  };

  const logout = () => {
    _setUser(null);
  };

  return (
    <LoginContext.Provider value={{ user, setUser, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
