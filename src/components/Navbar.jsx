import { FaShoppingCart, FaUser } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search products...", searchTerm);
  };

  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto rounded-xl bg-white border-b-pink-300">

        <NavLink to="/">
          <div className="ml-5">
            {/* h-20 */}
            <img src="logo.png" alt="Logo" className="h-20" />
          </div>
        </NavLink>

        <form onSubmit={handleSearch} className="flex-grow mx-6 max-w-xl relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/256/5680/5680244.png"
            alt="Search"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 px-4 py-1 rounded-full text-sm cursor-pointer"
            onClick={handleSearch}
          />
        </form>

        <div className="flex items-center font-semibold text-pink-400 mr-5 space-x-6 ">
          <NavLink to="/">
            <p className="hover:text-pink-600 transition">Home</p>
          </NavLink>

          <NavLink to="/login">
            <div className="flex items-center space-x-1 hover:text-pink-600 transition">
              <FaUser className="text-xl" />
              <span>Login</span>
            </div>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative hover:text-pink-600 transition">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-yellow-400 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-amber-900">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
