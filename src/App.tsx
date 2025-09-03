import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user-login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
