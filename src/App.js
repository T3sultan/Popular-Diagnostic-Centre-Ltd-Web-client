import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Login from "./Pages/Auth/Login/Login";
import Signup from "./Pages/Auth/Signup/Signup";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import NavBar from "./Pages/Shared/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
