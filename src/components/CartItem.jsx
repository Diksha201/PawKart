import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white">
      {/* Product Image */}
      <div className="w-full md:w-1/4 flex justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-[200px] h-[200px] object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-2 w-full md:w-3/4">
        <h1 className="text-lg font-semibold text-yellow-500">{item.title}</h1>
        <p className="text-sm text-pink-500 line-clamp-3">{item.description}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-yellow-400 font-bold text-lg">${item.price}</p>
          <button
            onClick={removeFromCart}
            className="text-pink-500 hover:text-pink-600 flex items-center gap-2"
          >
            <FcDeleteDatabase className="text-2xl " />
            <span className="hidden sm:inline">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
