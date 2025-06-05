import { useState,useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import Chatbot from "../components/Chatbot";

// sliding backgrounds
const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1741004419150-f3dd53743f59?q=80&w=1935&auto=format&fit=crop",
    text: "DISCOVER PREMIUM DOG PRODUCTS AT PAWKART. CLOTHES, FOODS, ACCESSORIES, AND MORE. PAMPER YOUR FURRY FRIENDS TODAY!",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1668918112517-8ebe0f3eb1f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkyfHxkb2clMjBjbG90aGVzfGVufDB8fDB8fHww",
    text: "GET COZY APPAREL AND WINTER ESSENTIALS FOR YOUR PETS. STYLE, COMFORT, AND CARE IN ONE PLACE!",
  },
  {
    url: "https://media.istockphoto.com/id/1326782487/photo/pomeranian-dog-sitting-on-the-floor.jpg?s=612x612&w=0&k=20&c=-gGFncKupYW4HnfDlTtq6XVsB75epWhuWGLqfBKeEUo=",
    text: "TREAT YOUR PETS TO THE BEST TOYS AND ACCESSORIES, HANDPICKED WITH LOVE AND CARE.",
  },
  {
    url: "https://media.istockphoto.com/id/1286278891/photo/white-pomeranian-puppy-in-hanbok-smelling-the-flowers.jpg?s=612x612&w=0&k=20&c=2rjI2oxnX_Oy-JQepV0w9dJ9_WCYbivfWr2bcm2W0uA=",
    text: "TREAT YOUR PETS TO THE BEST TOYS AND ACCESSORIES, HANDPICKED WITH LOVE AND CARE.",
  },
];

// left right chevron
const Home = () => {
  const [loading, setLoading] = useState(false);
   const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 sec
    return () => clearInterval(interval); // Cleanup
  }, []);

  // products
  const products = [
    {
      id: 1,
      title: "Dog T-Shirt",
      description: "A comfy t-shirt for your furry friend.",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Dog Sweat-Shirt",
      description: "Durable cosy, warm, soft sweat-shirt.",
      price: 9.99,
      image: "https://media.istockphoto.com/id/92187491/photo/ready-for-my-morning-run.webp?a=1&b=1&s=612x612&w=0&k=20&c=gAgTc9oW1wALXYTpg9_k2KVvHmGh2b5_fYIOMx7JZwM=",
    },
    {
      id: 3,
      title: "Dog Denim Jeans",
      description: "Stylish and comfortable Jeans.",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1710687486041-2abcfcf949ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGRvZyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Woolen Cap",
      description: "Cosy and Warm cap for winters.",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1582001962130-78c8053f186e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGRvZyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    },
      {
      id: 5,
      title: "Leather Jacket",
      description: "Stylish leather jacket for rides.",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1579112902044-211d42c6a4bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      title: "Floral Dress",
      description: "Stylish pink dress for your cutie.",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1742608428373-ac5369df769f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMGRvZyUyMHNraXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      title: "Floral Bow",
      description: "Fancy Bow for your female dog.",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1688110002649-e02b7597d19d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZlbWFsZSUyMGRvZyUyMHNraXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 8,
      title: "Boots",
      description: "Stylish rainy boots for babies.",
      price: 14.99,
      image: "https://media.istockphoto.com/id/485538259/photo/dog-in-the-rain.webp?a=1&b=1&s=612x612&w=0&k=20&c=8bhifWntXKVn57LftxtLoWkx6_zrtR7_kekKhObNeHI=",
    },
      {
      id: 9,
      title: "Goggles",
      description: "A black goggles to protect from sun.",
      price: 19.99,
      image: "https://media.istockphoto.com/id/122947916/photo/two-shetland-sheepdogs-wearing-sunglasses-and-scarves-in-winter.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZFjQ49ufEPMGXYP_MAuO1Q6w4OAsMjhC8Hkp4ios9yU=",
    },
    {
      id: 10,
      title: "Chew Toy",
      description: "Durable chew toy to keep your dog happy.",
      price: 9.99,
      image: "https://media.istockphoto.com/id/1317786896/photo/dog-toys.webp?a=1&b=1&s=612x612&w=0&k=20&c=f6GtNVB41E8DTiOxiTBRdBXUSQf2V5m-PU8Uik0sHhc=",
    },
    {
      id: 11,
      title: "Balls",
      description: "Durable squeeze balls.",
      price: 29.99,
      image: "https://media.istockphoto.com/id/146026034/photo/toy-for-dog.webp?a=1&b=1&s=612x612&w=0&k=20&c=NwTIH4G7UopNf9LAAc2EvFZUJljEFT6DULZ9N4vKsKA=",
    },
    {
      id: 12,
      title: "Soft Toys",
      description: "Cute Soft toys.",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1627323721367-94128c3fa0f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZyUyMHRveXN8ZW58MHx8MHx8fDA%3D",
    },
      {
      id: 13,
      title: "Dog Collar",
      description: "Stylish and comfortable collar.",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1667716705760-233650f8f3fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nJTIwY29sbGFyfGVufDB8fDB8fHww",
    },
    {
      id: 14,
      title: "Dog Pendant",
      description: "Beautiful and shiny Pendant.",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1682969651476-6fb48aba8b03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwY29sbGFyfGVufDB8fDB8fHww",
    },
    {
      id: 15,
      title: "Dog Food Pack",
      description: "Premium dog food for a healthy diet.",
      price: 29.99,
      image: "https://media.istockphoto.com/id/165907425/photo/dog-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z_jl3IP_U2b9TRpA6rg5-fbU4d6g57F55ObrkNcyCt4=",
    },
    {
      id: 16,
      title: "Pedigree",
      description: "Premium dog food for a healthy diet.",
      price: 14.99,
      image: "https://animeal.in/cdn/shop/files/000964_1.webp?v=1745490321",
    },
  ];
  

  return (
    <div>
      <section
        className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url('${heroImages[currentSlide].url}')`,
        }}
      >
        <div className="bg-pink-300 bg-opacity-40 p-6 rounded-lg mt-12">
          <p className="text-md text-yellow-300">QUALITY MEETS</p>
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-md">
            DISCOVER PREMIUM DOG PRODUCTS AT PAWKART. CLOTHES, FOODS,
            ACCESSORIES, AND MORE. PAMPER YOUR FURRY FRIENDS TODAY!
          </p>
          <button
            className="px-5 py-2 bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500 transition mt-3"
            onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          >
            Shop Now
          </button>
        </div>

      {/* left right button */}

          <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10 bg-black/30 p-2 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10 bg-black/30 p-2 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight />
        </button>
      </section>


 {/* Categories Section */}
<section className="bg-pink-300 bg-opacity-40 max-w-full mx-auto px-4 py-10">
  <h3 className="text-lg text-center text-yellow-400 ">Shop by </h3>
  <h2 className="text-3xl font-bold text-center text-pink-500 mb-8">Category</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
    {/* Category 1 */}
    <div>
      <img
        src="https://images.unsplash.com/photo-1583336663277-620dc1996580?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
        alt="Clothes"
        className="w-28 h-28 mx-auto rounded-full object-cover shadow-lg border-4 border-white hover:border-pink-500 cursor-pointer hover:scale-110 transition duration-300 ease-in"
      />
      <p className="mt-3 text-lg font-medium text-pink-600">Clothes</p>
    </div>

    {/* Category 2 */}
    <div>
      <img
        src="https://images.unsplash.com/photo-1549297161-14f79605a74c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwdG95c3xlbnwwfHwwfHx8MA%3D%3D"
        alt="Toys"
        className="w-28 h-28 mx-auto rounded-full object-cover shadow-lg border-4 border-white hover:border-pink-500 cursor-pointer hover:scale-110 transition duration-300 ease-in"
      />
      <p className="mt-3 text-lg font-medium text-pink-600">Toys</p>
    </div>

    {/* Category 3 */}
    <div>
      <img
        src="https://media.istockphoto.com/id/1049869360/photo/cool-dog.webp?a=1&b=1&s=612x612&w=0&k=20&c=3ZOM-o511dkXXr2jOJsbpkN0rrfFZq-6tYYKhRFIMj4="
        alt="Accessories"
        className="w-28 h-28 mx-auto rounded-full object-cover shadow-lg border-4 border-white hover:border-pink-500 cursor-pointer hover:scale-110 transition duration-300 ease-in"
      />
      <p className="mt-3 text-lg font-medium text-pink-600">Accessories</p>
    </div>

    {/* Category 4 */}
    <div>
      <img
        src="https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
        alt="Food"
        className="w-28 h-28 mx-auto rounded-full object-cover shadow-lg border-4 border-white hover:border-pink-500 cursor-pointer hover:scale-110 transition duration-300 ease-in"
      />
      <p className="mt-3 text-lg font-medium text-pink-600">Food</p>
    </div>
  </div>
</section>
<section className=" max-w-full mx-auto px-4 py-8">
  <h3 className="text-lg text-center text-yellow-400 ">Our</h3>
  <h2 className="text-3xl font-bold text-center text-pink-500 ">Products</h2>
  </section>

{/* spinner */}
      {loading ? (
        <Spinner />
      ) : (
        // product grid
        
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {products.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      )}

      

       {/* Footer */}
      <footer className="bg-pink-500 text-white text-center py-4 mt-10 ">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pawkart. All rights reserved.
        </p>
      </footer>
      <Chatbot />
    </div>
   
  );
};

export default Home;
