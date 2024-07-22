import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import axios from 'axios'; // Assuming axios is used for HTTP requests

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    return storedAuthStatus ? JSON.parse(storedAuthStatus) : false;
  });

const login = async (email, password) => {
  try {
    // Replace 'https://your-authentication-endpoint.com/login' with your actual login endpoint
    const response = await axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    });

    // Assuming the response contains a token and user ID in the following format:
    // { data: { token: 'your_token_here', userId: 'your_user_id_here' } }
    const { access_token, id } = response.data;

    // Store the token and user ID in localStorage
    localStorage.setItem("authToken", access_token);
    localStorage.setItem("userId", id);
    localStorage.setItem("isAuthenticated", "true");

    // Handle successful login (e.g., redirecting the user or updating the UI)
  } catch (error) {
    console.error("Login failed:", error);
    // Handle login failure (e.g., showing an error message)
  }
};

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
