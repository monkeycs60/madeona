import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [showProduct, setShowProduct] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const openProductMenu = () => {
    setShowProduct(!showProduct);
    setShowPricing(false);
    setShowAbout(false);
  };

  const openPricingMenu = () => {
    setShowPricing(!showPricing);
    setShowProduct(false);
    setShowAbout(false);
  };

  const openAboutMenu = () => {
    setShowAbout(!showAbout);
    setShowProduct(false);
    setShowPricing(false);
  };

    // set the style of the dropdown menu
   const displayProductToggleStyle = {
    display: showProduct ? "block" : "none",
    };
    const displayPricingToggleStyle = {
    display: showPricing ? "block" : "none",
    };
    const displayAboutToggleStyle = {
    display: showAbout ? "block" : "none",
    };

 

  return (
    <header className="bg-gray-200 flex flex-wrap items-center justify-between p-4">
      <Link href="/">
        <img
          className="h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
          alt="Logo"
        />
      </Link>
      <nav className="flex items-center">
        <div className="flex items-center">
          <div className="ml-4 relative">
            <div>
              <Link href="/product">
                <button
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition duration-150 ease-in-out"
                  onMouseEnter={openProductMenu}
                >
                  Product
                  <svg
                    className="ml-2 h-2 w-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
            </div>
            <div
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
              style={displayProductToggleStyle}
            >
              <div className="py-1 rounded-md bg-white shadow-xs">
                <Link
                  href="/product/package"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Package
                </Link>
                <Link
                  href="/product/manufacture"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Manufacture
                </Link>
                <Link
                  href="/product/provider"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Provider
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-4 relative">
            <div>
                <Link href="/pricing">
              <button
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition duration-150 ease-in-out"
                onMouseEnter={openPricingMenu}
              >
                Pricing
                <svg
                  className="ml-2 h-2 w-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
                </Link>
            </div>
            <div
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
              style={displayPricingToggleStyle}
            >
              <div className="py-1 rounded-md bg-white shadow-xs">
                <Link
                  href="/pricing/basic"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Basic
                </Link>
                <Link
                  href="/pricing/pro"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Pro
                </Link>
                <Link
                  href="/pricing/enterprise"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Enterprise
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-4 relative">
            <div>
                <Link href="/about">
              <button
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition duration-150 ease-in-out"
                onMouseEnter={openAboutMenu}
              >
                About
                <svg
                  className="ml-2 h-2 w-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
                </Link>
            </div>
            <div
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
              style={displayAboutToggleStyle}
            >
              <div className="py-1 rounded-md bg-white shadow-xs">
                <Link
                  href="/about/founder"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Founder
                </Link>
                <Link
                  href="/about/team"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  The Team
                </Link>
                <Link
                  href="/about/join-us"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Join us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
