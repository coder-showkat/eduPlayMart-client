import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import lottie404 from "../assets/404_page.json";
import usePageTitle from "../hooks/usePageTitle";

const ErrorPage = () => {
  usePageTitle("404 Page Not Found");
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-full max-w-xl mx-auto">
        <Lottie animationData={lottie404} />
        <Link
          to="/"
          className="btn btn-primary w-44 normal-case rounded-full transition-colors absolute left-1/2 -translate-x-1/2"
        >
          <svg
            className="animate-bounce inline-block w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H6M12 5l-7 7 7 7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
