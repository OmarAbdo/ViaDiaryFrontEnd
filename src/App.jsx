import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import GuestLayout from "./components/guestLayout";
import Main from "./pages/main/index";
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
            path="/home"
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                element={
                  <Layout>
                    <Main />
                  </Layout>
                }
              />
            }
          />
          <Route
            path="/"
            element={
              <GuestLayout>
                <Login />
              </GuestLayout>
            }
          />
          <Route
            path="/login"
            element={
              <GuestLayout>
                <Login />
              </GuestLayout>
            }
          />
          <Route
            path="/signup"
            element={
              <GuestLayout>
                <Registration />
              </GuestLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
