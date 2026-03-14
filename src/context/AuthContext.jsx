import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(email, password) {
    // Replace with real API call
    if (email && password) {
      setUser({ email });
      return true;
    }
    return false;
  }

  function signup(name, email, password) {
    // Replace with real API call
    if (name && email && password) {
      setUser({ email, name });
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
