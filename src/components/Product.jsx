import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/cartSlice";

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl border-2 border-pink-600">
      <div>
        <p className="text-yellow-500 font-semibold text-lg text-left truncate w-40">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-pink-500 font-normal text-[12px] text-left ">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[200px]">
        <img src={post.image} alt="" className="h-[200px] w-[200px] rounded-xl hover:scale-110 transition duration-300 ease-in" />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-yellow-400 font-semibold">${post.price}</p>
        </div>
        
        {
          cart.some((p) => p.id === post.id) ?
          (<button
          className="text-pink-500 border-2 border-pink-600 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-pink-600
          hover:text-yellow-400 transition duration-300 ease-in"
          onClick={removeFromCart}>
            Remove Item
          </button>) :
          (<button
          className="text-pink-500 border-2 border-pink-600 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-pink-600
          hover:text-yellow-400 transition duration-300 ease-in"
          onClick={addToCart}>
            Add to Cart
          </button>)
        }
      </div>
     

    </div>
  );
};

export default Product;
