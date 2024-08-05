import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4">
            <img src="logo.png" alt="" className="scale-50 mb-8" />
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-gray-600 font-bold text-xl mb-2">Company</h2>
            <ul>
              <li className="my-2">
                <Link
                  to="/features"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Features
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="/pricing"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Pricing
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="/affiliate"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Affiliate Program
                </Link>
              </li>
              <li className="my-2">
                <Link to="/press" className="text-gray-800 hover:text-gray-600">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-gray-600 font-bold text-xl mb-2">Support</h2>
            <ul>
              <li className="my-2">
                <Link
                  to="/account"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Account
                </Link>
              </li>
              <li className="my-2">
                <Link to="/help" className="text-gray-800 hover:text-gray-600">
                  Help
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="/contact"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Contact Us
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="/support"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-gray-600 font-bold text-xl mb-2">Legals</h2>
            <ul>
              <li className="my-2">
                <Link to="/terms" className="text-gray-800 hover:text-gray-600">
                  Terms & Conditions
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="/privacy"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="/licensing"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-0 flex justify-end">
          <Link
            to="/facebook"
            className="shadow text-gray-600 hover:text-gray-800 mx-1 scale-50 w-16 rounded-full"
          >
            <img src="facebook.png" alt="" />
          </Link>
          <Link
            to="/twitter"
            className="shadow text-gray-600 hover:text-gray-800 mx-1 scale-50 w-16"
          >
            <img src="twitter.png" alt="" />
          </Link>
          <Link
            to="/instagram"
            className="shadow text-gray-600 hover:text-gray-800 mx-1 scale-50 w-16"
          >
            <img src="instagram.png" alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
