import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import GuestLayout from "./components/guestLayout"; "./components/guestLayout";
import Main from './pages/main/index';
import Login from './pages/login/index';
import Registration from './pages/registration/index';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/home"
            element={
              <Layout>
                <Main />
              </Layout>
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