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
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="pt-10">
      <div className="footer container py-4">
        <div>
          <Link to="/" className="flex items-center" data-aos="zoom-in">
            <img src={logo} alt="logo" className="w-14" />
            <h2 className="font-nunito font-extrabold text-2xl mt-1 ml-1 text-secondary-focus leading-10 letter tracking-tighter">
              <span className="text-primary">Edu</span>
              PlayMart
            </h2>
          </Link>
          <a
            className="link link-hover flex items-center gap-2"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            <FaFacebookF /> Facebook
          </a>
          <a
            className="link link-hover flex items-center gap-2"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            <FaInstagram /> Instagram
          </a>
          <a
            className="link link-hover flex items-center gap-2"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            <FaPinterest /> Pinterest
          </a>
        </div>
        <div>
          <span
            className="footer-title opacity-100 text-lg font-semibold"
            data-aos="zoom-in"
          >
            INFORMATION
          </span>
          <a
            className="link link-hover"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            About Search
          </a>
          <a
            className="link link-hover"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            Privacy Policy
          </a>
          <a
            className="link link-hover"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            Terms & Condition
          </a>
          <a
            className="link link-hover"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            Faq & Help
          </a>
          <a
            className="link link-hover"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            Refund & Return
          </a>
        </div>
        <div>
          <span
            className="footer-title opacity-100 text-lg font-semibold"
            data-aos="zoom-in"
          >
            SUPPORT
          </span>
          <a
            className="link link-hover"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            Chat Support
          </a>
          <a
            className="link link-hover"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            Terms of Support
          </a>
          <a
            className="link link-hover"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            Press Release
          </a>
          <a
            className="link link-hover"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            Star Support
          </a>
        </div>
        <div>
          <span
            className="footer-title opacity-100 text-lg font-semibold"
            data-aos="zoom-in"
          >
            CONTACT US
          </span>
          <p
            className="flex items-center gap-2"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            <FaHome /> Dhaka, Bangladesh
          </p>
          <p
            className="flex items-center gap-2"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            <FaPhoneAlt /> 0000 - 123 - 456789
          </p>
          <p
            className="flex items-center gap-2"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            <BiTime /> 9.00AM - 6.00PM
          </p>
          <a
            className="link link-hover flex items-center gap-2"
            data-aos="fade-left"
            data-aos-offset={0}
          >
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
