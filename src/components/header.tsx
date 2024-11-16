import { FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";


export default function Header() {
    return (



      <header className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <h1 className="text-2xl font-bold">SHOP.CO</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">Shop</a>
          <a href="#" className="text-gray-600 hover:text-black">On Sale</a>
          <a href="#" className="text-gray-600 hover:text-black">New Arrivals</a>
          <a href="#" className="text-gray-600 hover:text-black">Brands</a>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="hidden md:block px-24 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 "
          />
          <button className="text-gray-600 hover:text-black">
          <FaShoppingCart />
          </button>
          <button className="text-gray-600 hover:text-black">
          <FaRegCircleUser />

          </button>
         


        </div>
      </header>
    );
  }
  