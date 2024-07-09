import React, { useState } from "react";
import Belt1 from "../assets/belt1.jfif";
import Belt2 from "../assets/belt2.jfif";
import Belt3 from "../assets/belt3.jfif";
import Belt4 from "../assets/belt4.jfif";
import Block1 from "../assets/blocks1.jfif";
import Block2 from "../assets/blocks2.jfif";
import Block3 from "../assets/blocks3.jfif";
import Block4 from "../assets/blocks4.jfif";
import Shoes1 from "../assets/shoes1.jfif";
import Shoes2 from "../assets/shoes2.jfif";
import Shoes3 from "../assets/shoes3.jfif";
import Shoes4 from "../assets/shoes4.jfif";
import ProductCards from "./items";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-toastify";
import Offcanvas from "react-bootstrap/Offcanvas";

const products = [
  {
    id: 1,
    category: "Yoga Belts",
    image: Belt1,
    text: "High-quality yoga belt to enhance your practice.",
  },
  {
    id: 2,
    category: "Yoga Belts",
    image: Belt2,
    text: "Durable and comfortable yoga belt for stretching.",
  },
  {
    id: 3,
    category: "Yoga Belts",
    image: Belt3,
    text: "Yoga belt with adjustable length for all levels.",
  },
  {
    id: 4,
    category: "Yoga Belts",
    image: Belt4,
    text: "Perfect yoga belt for improved flexibility and balance.",
  },
  {
    id: 5,
    category: "Yoga Blocks",
    image: Block1,
    text: "Supportive yoga block for various poses and stretches.",
  },
  {
    id: 6,
    category: "Yoga Blocks",
    image: Block2,
    text: "Eco-friendly yoga block made from natural materials.",
  },
  {
    id: 7,
    category: "Yoga Blocks",
    image: Block3,
    text: "Lightweight and durable yoga block for stability.",
  },
  {
    id: 8,
    category: "Yoga Blocks",
    image: Block4,
    text: "Premium yoga block for enhanced comfort and support.",
  },
  {
    id: 9,
    category: "Yoga Shoes",
    image: Shoes1,
    text: "Comfortable yoga shoes with non-slip soles.",
  },
  {
    id: 10,
    category: "Yoga Shoes",
    image: Shoes2,
    text: "Breathable yoga shoes for maximum flexibility.",
  },
  {
    id: 11,
    category: "Yoga Shoes",
    image: Shoes3,
    text: "Stylish and functional yoga shoes for every session.",
  },
  {
    id: 12,
    category: "Yoga Shoes",
    image: Shoes4,
    text: "High-performance yoga shoes for all-day comfort.",
  },
];

function Product() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleCartIconClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleAddtoCart = (product) => {
    setCart((count) => count + 1);
    setCartItems([...cartItems, product]);
    toast.success("Item Added to cart");
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  const filteredProducts = selectedCategories.length
    ? products.filter((product) =>
        selectedCategories.includes(product.category)
      )
    : products;

  return (
    <div className="product-page">
      {/* Sidebar with categories */}
      <div className="sidebar p-6">
        <h3 className="text-slate-500 italic">Filtered Categories</h3>
        <div>
          <input
            type="checkbox"
            id="category1"
            value="Yoga Blocks"
            onChange={handleCategoryChange}
          />
          <label htmlFor="category1" className="ps-2 tracking-wider text-2xl">
            Yoga Blocks
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="category2"
            value="Yoga Shoes"
            onChange={handleCategoryChange}
          />
          <label htmlFor="category2" className="ps-2 tracking-wider text-2xl ">
            Yoga Shoes
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="category3"
            value="Yoga Belts"
            onChange={handleCategoryChange}
          />
          <label htmlFor="category3" className="ps-2 tracking-wider text-2xl ">
            Yoga Belts
          </label>

          {/* {Right Add to Cart Section} */}
          <div className="flex justify-end relative right-10 cart-right">
            <div className="right absolute bottom-5">
              <p className="add-to">Add to cart</p>
              <AiOutlineShoppingCart
                size={30}
                style={{ cursor: "pointer" }}
                onClick={handleCartIconClick}
              />
              <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white p-1 text-xs">
                {cart > 0 && (
                  <span className="absolute top-5 right-14 w-6 h-7  text-center rounded-full bg-red-500 text-white p-1 text-1xl">
                    {cart}
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
        {/* Add more categories as needed */}
      </div>

      {/* Offcanvas for Cart */}
      <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="flex items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-16 h-16 mr-4"
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main content */}
      <div className="main-content">
        <h1 className="text-center">Our Products</h1>
        <div className="product-grid flex flex-wrap justify-around mt-5">
          {filteredProducts.map((product) => (
            <ProductCards
              key={product.id}
              image={product.image}
              category={product.category}
              describition={product.text}
              handleAddtoCart={() => handleAddtoCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
