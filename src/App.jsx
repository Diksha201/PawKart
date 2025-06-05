import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login";

const App = () => {
  return (<div>
        <div className="bg-white-900 border-b-pink-300">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
           <Route path="/login" element={<Login />} />
        </Routes>
  </div>)
};

export default App;
