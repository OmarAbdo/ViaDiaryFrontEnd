import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout";
import GuestLayout from "./components/guestLayout";
import Landing from "./pages/landing/index";
import Home from "./pages/home/index";
import User from "./pages/user/index";
import Login from "./pages/login/index";
import Registration from "./pages/registration/index";
import PrivateRoute from "./components/privateRoute";
import { useAuth } from "./context/authentication";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/home" /> : <Landing />}
          />
          <Route
            path="/home"
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />
            }
          />
          <Route
            path="/user/:id"
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                element={
                  <Layout>
                    <User />
                  </Layout>
                }
              />
            }
          />

          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/home" />
              ) : (
                <GuestLayout>
                  <Login />
                </GuestLayout>
              )
            }
          />
          <Route
            path="/signup"
            element={
              isAuthenticated ? (
                <Navigate to="/home" />
              ) : (
                <GuestLayout>
                  <Registration />
                </GuestLayout>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
