


import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup"
import ForgotPassword from "./pages/auth/ForgotPassword"
import Dashboard from "./pages/dashboard/Dashboard";
import ListHotels from "./pages/dashboard/ListHotels";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

        {/* LAYOUT DASHBOARD */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<div>Bienvenue sur le dashboard</div>} />
          <Route path="hotels" element={<ListHotels />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

