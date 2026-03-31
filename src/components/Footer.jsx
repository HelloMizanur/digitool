import React from "react";
import { CiInstagram, FaFacebookF, CiYoutube } from "react-icons/ci";
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#0b0f19",
        color: "white",
        padding: "60px 20px",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-10">
            <h1 className="text-3xl font-bold mb-4">DigiTools</h1>
            <p className="text-gray-400">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="w-1/2 md:w-1/6 mb-8">
            <h4 className="font-bold mb-4">Product</h4>
            <p className="text-gray-400 mb-2 cursor-pointer">Features</p>
            <p className="text-gray-400 mb-2 cursor-pointer">Pricing</p>
            <p className="text-gray-400 mb-2 cursor-pointer">Templates</p>
            <p className="text-gray-400 mb-2 cursor-pointer">Integrations</p>
          </div>

          <div className="w-1/2 md:w-1/6 mb-8">
            <h4 className="font-bold mb-4">Company</h4>
            <p className="text-gray-400 mb-2 cursor-pointer">About</p>
            <p className="text-gray-400 mb-2 cursor-pointer">Blog</p>
            <p className="text-gray-400 mb-2 cursor-pointer">Careers</p>
            <p className="text-gray-400 mb-2 cursor-pointer">Press</p>
          </div>

          <div className="w-1/2 md:w-1/6 mb-8">
            <h4 className="font-bold mb-4">Resources</h4>
            <p className="text-gray-400 mb-2 cursor-pointer">Documentation</p>
            <p className="text-gray-400 mb-2 cursor-pointer">Help Center</p>
            <p className="text-gray-400 mb-2 cursor-pointer">Community</p>
            <p className="text-gray-400 mb-2 cursor-pointer">Contact</p>
          </div>

          <div className="w-full md:w-1/6">
            <h4 className="font-bold mb-4">Social Links</h4>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <CiInstagram />
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <FaFacebookF />
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <CiYoutube />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-5 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
