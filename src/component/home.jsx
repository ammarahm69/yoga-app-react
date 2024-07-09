import React, { useEffect, useState } from "react";
import Carousels from "./carousels";
import Practices from "./pratice";
import Portfolio from "./portfoilo";
import Pose1 from "../assets/pose-1.avif";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";

function Home({ searchQuery }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    let newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegexPattern.test(newEmail)) {
      setError("Please enter a valid email");
    } else {
      setError("");
    }
  };

  const handleBtnClick = () => {
    if (!error && email) {
      toast.success(`Thanks for subscribing`);
      console.log("Email", email);
    } else {
      toast.error("Please enter valid email address");
    }
  };

  const highlightText = (text) => {
    if (!searchQuery) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={index}>{part}</mark>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <div className="ps-5 flex flex-col mt-20 col-lg-11 col-md-12 col-sm-12 col-12">
        <h1 className="text-6xl font-bold heading tracking-wider leading-snug md:text-left">
          {highlightText("The only yoga membership you’ll ever need.")}
        </h1>
        <div className="mt-5 col-lg-12 col-md-12 col-sm-12 col-12 para md:text-left">
          <h2 className="text-3xl tracking-wide mt-3">
            {highlightText("Practice yoga, meditation and breathwork.")}
          </h2>
          <h2 className="text-3xl tracking-wide mt-3">
            {highlightText("Learn Ayurveda and yoga philosophy.")}
          </h2>
          <h2 className="text-3xl tracking-wide mt-3">
            {highlightText("Earn yoga teaching certificates.")}
          </h2>
        </div>

        <div className="pose1 relative md:-top-56 mt-10 md:mt-0 hidden md:block">
          <img
            src={Pose1}
            alt="pose1"
            className="w-80 absolute -right-6 col-lg-5 col-md-3 col-sm-12 mx-auto md:mx-0"
          />
        </div>

        <div className="email-sec">
          <div className="mt-28">
            <label
              htmlFor="inputname"
              className="block text-gray-800 font-semibold text-sm"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                required
                type="email"
                name="inputname"
                id="email"
                className="block w-96 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                onChange={handleInputChange}
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <button
              className="mt-3 col-9 col-lg-4 col-md-6"
              onClick={handleBtnClick}
            >
              Start Free Trial
            </button>
          </div>
        </div>
      
        {/* Gallery and Practices components */}
        <div className="mt-52 bg-gradient-to-l">
          <div
            className="relative bg-cover bg-center h-96 w-full"
            style={{
              backgroundImage:
                "url('../assets/CreateYouDialyRitual_background.webp')",
            }}
          >
            <h1 className="text-center relative bottom-10 text-5xl tracking-widest text-slate-900 font-bold">
              Create <span className="italic">Your</span> Daily Rituals
            </h1>
            <Carousels />
          </div>
        </div>

        <div className="mt-32 col-lg-12 col-md-12 col-sm-12 col-12">
          <Practices />
        </div>
      </div>
      
      {/* Portfolio section out of main div for full width */}
      <div className="w-full h-auto bg-custom mt-96">
        <Portfolio />
      </div>
    </>
  );
}

export default Home;
