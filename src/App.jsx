import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Main from './pages/main/index';
import Login from './pages/login/index';
import Registration from './pages/registration/index';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout><Main /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/signup" element={<Layout><Registration /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;