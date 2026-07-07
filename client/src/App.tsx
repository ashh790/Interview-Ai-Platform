import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Profile from "../src/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;