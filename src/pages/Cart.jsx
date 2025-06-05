import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-8">
      {cart.length > 0 ? (
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6 text-pink-500">Shopping Cart</h2>
            <div className="flex flex-col gap-4">
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 h-fit mt-12">
            <h2 className="text-xl font-semibold mb-4 text-pink-500">Summary</h2>
            <div className="flex justify-between mb-2 text-gray-600">
              <span>Total Items:</span>
              <span>{cart.length}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold text-pink-500 border-t pt-4 mt-4">
              <span>Total Amount:</span>
              <span className="text-yellow-500">${totalAmount.toFixed(2)}</span>
            </div>
            <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded font-bold transition duration-300">
              Check Out Now
            </button>
          </div>
        </div>) : 
    (<div className="flex flex-col items-center justify-center">
      <h1 className="p-10 mt-12 text-4xl font-bold mb-4 text-pink-400">Cart Empty</h1>
      <Link to={"/"}>
        <button className="px-6 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 font-bold">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
