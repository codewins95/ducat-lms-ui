import React, { useState } from "react";
import logoImg from "/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaRegUser,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RiCloseFill } from "@remixicon/react";

const products = [
  { name: 'Product 1', price: 29.99 },
  { name: 'Product 2', price: 19.99 },
  { name: 'Product 3', price: 39.99 },
];

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const totalPrice = products.reduce((total, product) => total + product.price, 0);


  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header>
        {/* header top start */}
        <div className="bg-blackColor2 dark:bg-lightGrey10-dark hidden lg:block">
          <div className="container mx-auto text-whiteColor text-size-5 xl:text-sm py-1 xl:py-1.5">
            <div className="flex justify-between items-center">
              {/* Contact Information */}
              <div>
                <p className="text-md">
                  Call Us:{" "}
                  <a
                    href="tel:+1800123456789"
                    className="hover:text-primaryColor"
                  >
                    +91000000000
                  </a>{" "}
                  - Mail Us:{" "}
                  <a
                    href="mailto:Itcroc@mail.com"
                    className="hover:text-primaryColor"
                  >
                    example@gmail.com
                  </a>
                </p>
              </div>

              {/* Address and Social Media Links */}
              <div className="flex gap-10 items-center">
                {/* Address */}
                <div>
                  <p>
                    <i className="icofont-location-pin text-primaryColor text-lg mr-1.5" />
                    <span>New delhi 110035 India</span>
                  </p>
                </div>

                {/* Social Media Links */}
                <ul className="flex gap-3 text-lg">
                  <li>
                    <a
                      className="hover:text-primaryColor"
                      href="#"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primaryColor"
                      href="#"
                      aria-label="Twitter"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primaryColor"
                      href="#"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primaryColor"
                      href="#"
                      aria-label="YouTube"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* header top end */}
        <div className="sticky-header z-medium dark:bg-whiteColor-dark transition-all duration-500 ">
          <nav className="py-4 px-4 lg:px-0 container mx-auto relative">
            <div className="flex justify-between items-center">
              {/* Logo Section */}
              <div>
                <Link to="/" className="block">
                  <img
                    src={logoImg}
                    alt="Logo"
                    className="w-auto h-10 lg:h-12"
                  />
                </Link>
              </div>

              {/* Main Menu (Desktop Only) */}
              <div className="hidden lg:flex space-x-6">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="courses" className="nav-link">
                  Courses
                </Link>
                <Link
                  to="/about"
                  className="nav-link"
                >
                  About
                </Link>
                <Link to="/contact-us" className="nav-link">
                  Contact Us
                </Link>
              </div>

              {/* Shopping Cart and User Actions */}
              <div className="flex items-center space-x-4 lg:space-x-6">
                {/* Cart Icon */}
                <Link onClick={() => setIsOpen(!isOpen)} className="relative group cursor-pointer">
                  <TiShoppingCart className="text-2xl text-black dark:text-white transition duration-300 group-hover:text-secondaryColor" />
                  <span className="absolute -top-1 2xl:-top-[5px] -right-[10px] lg:right-3/4 2xl:-right-[10px] text-[10px] font-medium text-white dark:text-whiteColor-dark bg-secondaryColor px-1 py-[2px] leading-1 rounded-full z-50 block">
                    3
                  </span>
                </Link>

                {/* User Profile Icon */}
                <Link
                  to="/login"
                  className="hidden lg:block text-black dark:text-white transition-all"
                >
                  <FaRegUser className="text-lg" />
                </Link>

                {/* Get Started Button */}
                <a
                  href="#"
                  className="hidden lg:block px-4 py-2 bg-primaryColor text-white rounded hover:bg-white hover:text-primaryColor transition-all"
                >
                  Get Started
                </a>

                {/* Mobile Menu Toggle */}
                <button
                  className="lg:hidden text-3xl text-darkdeep1 dark:text-white transition-all"
                  onClick={toggleMobileMenu}
                >
                  <FiMenu />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden absolute top-16 left-0 right-0 bg-white dark:bg-darkdeep1 shadow-lg z-10">
                <ul className="flex flex-col space-y-4 p-4">
                  <li>
                    <a href="#" className="nav-link-mobile">
                      Home
                    </a>
                  </li>
                  <li>
                    <Link to="/courses" className="nav-link-mobile">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="nav-link-mobile"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <a
                      href="pages/ecommerce/shop.html"
                      className="nav-link-mobile"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <Link to="/contact-us" className="nav-link-mobile">
                      Login
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="nav-link-mobile bg-primaryColor text-white rounded px-4 py-2 text-center"
                    >
                      Get Started
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </header>



      {/* onClick={() => setIsOpen(false)} */}
      {isOpen && (
        <div className="fixed overflow-auto shadow-dropdown-secodary max-w-dropdown3 w-2000 rounded-standard p-5 bg-white dark:bg-whiteColor-dark z-1 right-20 top-30">
          <ul className="flex flex-col gap-y-5 pb-5 mb-30px border-b border-borderColor dark:border-borderColor-dark">
            <li className="relative flex gap-x-15px items-center">
              <a href="">
                <img
                  src="./assets/images/grid/cart1.jpg"
                  alt="photo"
                  className="w-card-img py-[3px]"
                />
              </a>
              <div>
                <a
                  href=""
                  className="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                >
                  web dictionary
                </a>
                <p className="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                  1 x<span className="text-secondaryColor">₹ 80.00</span>
                </p>
              </div>
              <button className="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                <i className="icofont-close-line" />
              </button>
            </li>
            <li className="relative flex gap-x-15px items-center">
              <a href="">
                <img
                  src="./assets/images/grid/cart2.jpg"
                  alt="photo"
                  className="w-card-img py-[3px]"
                />
              </a>
              <div>
                <a
                  href=""
                  className="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                >
                  Design Minois
                </a>
                <p className="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                  1 x<span className="text-secondaryColor">₹ 60.00</span>
                </p>
              </div>
              <button className="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                <i className="icofont-close-line" />
              </button>
            </li>
            <li className="relative flex gap-x-15px items-center">
              <a href="">
                <img
                  src="./assets/images/grid/cart3.jpg"
                  alt="photo"
                  className="w-card-img py-[3px]"
                />
              </a>
              <div>
                <a
                  href=""
                  className="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                >
                  Crash Course
                </a>
                <p className="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                  1 x<span className="text-secondaryColor">₹ 70.00</span>
                </p>
              </div>
              <button className="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                <i className="icofont-close-line" />
              </button>
            </li>
          </ul>

          <div>
            <p className="text-size-17 text-contentColor dark:text-contentColor-dark pb-5 flex justify-between">
              Total Price:
              <span className="font-bold text-secondaryColor">₹ 210.00</span>
            </p>
          </div>

          <div className="flex flex-col gap-y-5">
            <a
              href="./pages/ecommerce/cart.html"
              className="text-sm font-bold text-contentColor dark:text-contentColor-dark hover:text-whiteColor hover:bg-secondaryColor text-center py-10px border border-secondaryColor"
            >
              View Cart
            </a>
            <a
              href="./pages/ecommerce/checkout.html"
              className="text-sm font-bold bg-darkblack dark:bg-darkblack-dark text-whiteColor dark:text-whiteColor-dark hover:bg-secondaryColor dark:hover:bg-secondaryColor text-center py-10px"
            >
              Checkout
            </a>
          </div>
        </div>

      )}


    </>
  );
};

export default Header;
