"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChartBarIcon as TrendingUpIcon, // IPO Icon
  CurrencyDollarIcon as TradingIcon, // Trading Icon
  UserIcon, // Profile Icon
  ShieldCheckIcon,
  DocumentTextIcon,
  StarIcon,
  EnvelopeIcon as MailIcon,
  ShareIcon,
  ArrowRightOnRectangleIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import Badge from "../../assets/images/premium.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#008566] text-white p-4 flex justify-between items-center md:h-screen md:w-[20vw] w-full md:flex-col md:justify-start">
      <div className="flex items-center justify-between w-full md:flex-col md:items-start">
        <div className="flex flex-row justify-between w-full">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="md:hidden focus:outline-none">
              <Bars3Icon className="h-6 w-6" />
            </button>
            <div className="ml-3 text-xl font-semibold md:ml-0 md:mt-4">
              <span className="block md:hidden">Paper Trade</span>
              <span className="hidden md:block">Paper Trade</span>
            </div>
          </div>
          <div className="md:mt-auto flex items-center w-8 h-8">
            <Image src={Badge} alt="Profile" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="hidden w-full md:flex flex-col space-y-4 mt-8">
          <div>
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-3 w-full justify-between text-left hover:text-gray-300"
            >
              <div className="flex flex-row space-x-3">
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
              </div>
              {isDropdownOpen ? (
                <ChevronUpIcon className="h-4 w-4 ml-auto" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 ml-auto" />
              )}
            </button>
            {isDropdownOpen && (
              <div className="ml-8 mt-2 flex flex-col space-y-2">
                <Link href="/ipo" className="flex items-center space-x-3 hover:text-gray-300">
                  <TrendingUpIcon className="h-5 w-5" />
                  <span>IPO</span>
                </Link>
                <Link href="/trading" className="flex items-center space-x-3 hover:text-gray-300">
                  <TradingIcon className="h-5 w-5" />
                  <span>Trading</span>
                </Link>
                <Link href="/profile" className="flex items-center space-x-3 hover:text-gray-300">
                  <UserIcon className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/upcoming" className="flex items-center space-x-3 hover:text-gray-300">
            <CalendarIcon className="h-5 w-5" />
            <span>Upcoming</span>
          </Link>
          <Link href="/privacy-policy" className="flex items-center space-x-3 hover:text-gray-300">
            <ShieldCheckIcon className="h-5 w-5" />
            <span>Privacy Policy</span>
          </Link>
          <Link href="/terms-conditions" className="flex items-center space-x-3 hover:text-gray-300">
            <DocumentTextIcon className="h-5 w-5" />
            <span>Terms & Conditions</span>
          </Link>
          <Link href="/rate-us" className="flex items-center space-x-3 hover:text-gray-300">
            <StarIcon className="h-5 w-5" />
            <span>Rate Us</span>
          </Link>
          <Link href="/contact-us" className="flex items-center space-x-3 hover:text-gray-300">
            <MailIcon className="h-5 w-5" />
            <span>Contact Us</span>
          </Link>
          <Link href="/share-with-friends" className="flex items-center space-x-3 hover:text-gray-300">
            <ShareIcon className="h-5 w-5" />
            <span>Share with Friends</span>
          </Link>
          <Link href="/login" className="flex items-center space-x-3 hover:text-gray-300">
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <span>Login</span>
          </Link>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <div className="text-xl font-bold text-[#0b8c4b]">Welcome, Guest</div>
            <button onClick={toggleSidebar} className="focus:outline-none">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-3 w-full text-left justify-between hover:text-gray-300"
              >
                <div className="flex flex-row space-x-3">
                  <HomeIcon className="h-5 w-5" />
                  <span>Home</span>
                </div>
                {isDropdownOpen ? (
                  <ChevronUpIcon className="h-4 w-4 ml-auto" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4 ml-auto" />
                )}
              </button>
              {isDropdownOpen && (
                <div className="ml-8 mt-2 flex flex-col space-y-2">
                  <Link href="/ipo" className="flex items-center space-x-3 hover:text-gray-300">
                    <TrendingUpIcon className="h-5 w-5" />
                    <span>IPO</span>
                  </Link>
                  <Link href="/trading" className="flex items-center space-x-3 hover:text-gray-300">
                    <TradingIcon className="h-5 w-5" />
                    <span>Trading</span>
                  </Link>
                  <Link href="/profile" className="flex items-center space-x-3 hover:text-gray-300">
                    <UserIcon className="h-5 w-5" />
                    <span>Profile</span>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/upcoming" className="flex items-center space-x-3 hover:text-gray-300">
              <CalendarIcon className="h-5 w-5" />
              <span>Upcoming</span>
            </Link>
            <Link href="/privacy-policy" className="flex items-center space-x-3 hover:text-gray-300">
              <ShieldCheckIcon className="h-5 w-5" />
              <span>Privacy Policy</span>
            </Link>
            <Link href="/terms-conditions" className="flex items-center space-x-3 hover:text-gray-300">
              <DocumentTextIcon className="h-5 w-5" />
              <span>Terms & Conditions</span>
            </Link>
            <Link href="/rate-us" className="flex items-center space-x-3 hover:text-gray-300">
              <StarIcon className="h-5 w-5" />
              <span>Rate Us</span>
            </Link>
            <Link href="/contact-us" className="flex items-center space-x-3 hover:text-gray-300">
              <MailIcon className="h-5 w-5" />
              <span>Contact Us</span>
            </Link>
            <Link href="/share-with-friends" className="flex items-center space-x-3 hover:text-gray-300">
              <ShareIcon className="h-5 w-5" />
              <span>Share with Friends</span>
            </Link>
            <Link href="/login" className="flex items-center space-x-3 hover:text-gray-300">
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
