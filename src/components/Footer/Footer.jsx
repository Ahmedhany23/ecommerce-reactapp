import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background-2 text-white pt-[80px] pb-6 font-poppins clear-both mt-[50px]">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 lg:gap-1 xl:gap-20">
          {/* Subscription Section */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <h3 className="text-2xl font-bold font-inter ">Exclusive</h3>
            <p className="text-xl  font-medium">Subscribe</p>
            <p className=" text-[1rem] font-normal text-text-1">
              Get 10% off your first order
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-3 pl-4  bg-background-2 text-text-1 rounded border-[1.5px] border-text-1 focus:outline-none focus:ring-2 focus:ring-secondary-2"
              />
              <button className="absolute right-0 top-0 h-full pr-4 pl-10 text-text-1 rounded-r-lg  transition duration-300">
                <img src="/images/icons/send.png" alt="send" />
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <h3 className="text-xl font-medium text-text-1">Support</h3>
            <div className="flex flex-col gap-4">
              <p className="font-normal text-text-1 text-[1rem]">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="font-normal text-text-1 text-[1rem]">
                exclusive@gmail.com
              </p>
              <p className="font-normal text-text-1 text-[1rem]">
                +88015-88888-9999
              </p>
            </div>
          </div>

          {/* Account Section */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <h3 className="text-xl font-medium text-text-1">Account</h3>

            <ul className="flex flex-col gap-4">
              <li className="text-text-1 font-normal text-[1rem]">
                <Link to="#" className="hover:underline">
                  My Account
                </Link>
              </li>
              <li className="text-text-1 font-normal text-[1rem]">
                <Link to="#" className="hover:underline">
                  Login / Register
                </Link>
              </li>
              <li className="text-text-1 font-normal text-[1rem]">
                <Link to="#" className="hover:underline">
                  Cart
                </Link>
              </li>
              <li className="text-text-1 font-normal text-[1rem]">
                <Link to="#" className="hover:underline">
                  Wishlist
                </Link>
              </li>
              <li className="text-text-1 font-normal text-[1rem]">
                <Link to="#" className="hover:underline">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <h3 className="text-xl font-medium text-text-1">Quick Link</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-text-1 font-normal text-[1rem]">
                <Link to="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="text-text-1 font-normal text-[1rem]">
                <Link to="#" className="hover:underline">
                  Terms Of Use
                </Link>
              </li>
              <li className="text-text-1 font-normal text-[1rem]">
                <Link to="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li className="text-text-1 font-normal text-[1rem]">
                <Link to="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <h3 className="text-xl font-medium text-text-1">Download App</h3>
            <div>
              <p className=" text-[0.75rem] text-text-1 font-medium opacity-70 mb-1">
                Save $3 with App New User Only
              </p>
              <div className="flex gap-2 mb-2">
                <img src="/images/icons/Qr Code.png" alt="Qr Code" />
                <div className="space-y-3">
                  <img
                    src="/images/icons/GooglePlay.png"
                    alt="Google Play"
                    className="cursor-pointer hover:opacity-75"
                  />
                  <img
                    src="/images/icons/AppStore.png"
                    alt="App Store"
                    className="cursor-pointer hover:opacity-75"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <Link
                to="#"
                className="text-white hover:text-secondary-1 transition"
              >
                <img src="/images/icons/Icon-Facebook.png" alt="" />
              </Link>
              <Link
                to="#"
                className="text-white hover:text-secondary-1 transition"
              >
                <img src="/images/icons/Icon-Twitter.png" alt="" />
              </Link>
              <Link
                to="#"
                className="text-white hover:text-secondary-1 transition"
              >
                <img src="/images/icons/Icon-Instagram.png" alt="" />
              </Link>
              <Link
                to="#"
                className="text-white hover:text-secondary-1 transition"
              >
                <img src="/images/icons/Icon-Linkedin.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-12 pt-3 text-center text-[1rem] border-t  opacity-40 ">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}
