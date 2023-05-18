import { BiTime } from "react-icons/bi";
import {
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaPhoneAlt,
  FaPinterest,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";

const Footer = () => {
  return (
    <footer className="pt-10">
      <div className="footer container py-4">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-40 mb-3" />
          </Link>
          <a className="link link-hover flex items-center gap-2">
            <FaFacebookF /> Facebook
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaInstagram /> Instagram
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaPinterest /> Pinterest
          </a>
        </div>
        <div>
          <span className="footer-title opacity-100 text-lg font-semibold">
            INFORMATION
          </span>
          <a className="link link-hover">About Search</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Condition</a>
          <a className="link link-hover">Faq & Help</a>
          <a className="link link-hover">Refund & Return</a>
        </div>
        <div>
          <span className="footer-title opacity-100 text-lg font-semibold">
            SUPPORT
          </span>
          <a className="link link-hover">Chat Support</a>
          <a className="link link-hover">Terms of Support</a>
          <a className="link link-hover">Press Release</a>
          <a className="link link-hover">Star Support</a>
        </div>
        <div>
          <span className="footer-title opacity-100 text-lg font-semibold">
            CONTACT US
          </span>
          <p className="flex items-center gap-2">
            <FaHome /> Dhaka, Bangladesh
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> 0000 - 123 - 456789
          </p>
          <p className="flex items-center gap-2">
            <BiTime /> 9.00AM - 6.00PM
          </p>
          <a className="link link-hover flex items-center gap-2">
            <HiMail /> demo@example.com
          </a>
        </div>
      </div>
      <div className="footer footer-center p-4 glass">
        <div>
          <p>Copyright © 2023 - All right reserved by Showkat Ali Sam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
