import { FaFacebookF, FaGoogle, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Breadcrumb from "../../../components/Breadcrumb";
import usePageTitle from "../../../hooks/usePageTitle";
import RelatedToys from "./RelatedToys";

const ToyDetails = () => {
  const { toyDetails, relatedToys } = useLoaderData();
  const {
    image,
    name,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    availableQty,
    details,
  } = toyDetails;
  usePageTitle("Toy | " + name);

  return (
    <div>
      <Breadcrumb heading="Toy">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{subCategory}</li>
          <li>{name}</li>
        </ul>
      </Breadcrumb>

      <div className="container my-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="h-full relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center aspect-square md:aspect-auto md:absolute"
            data-aos="zoom-in"
          />
        </div>
        <div className="space-y-6">
          <h1
            className="text-3xl sm:text-4xl font-extrabold font-nunito pb-2"
            data-aos="fade-left"
          >
            {name}
          </h1>
          <div data-aos="fade-left">
            <StarRatings
              rating={rating}
              starRatedColor="#FEBF00"
              starDimension="20px"
              starSpacing="1px"
              numberOfStars={5}
              name="rating"
            />
          </div>
          <p data-aos="fade-left">{details}</p>
          <p className="space-x-5" data-aos="fade-left">
            <span className="font-extrabold font-nunito">Price:</span>
            <span>${price}</span>
          </p>
          <p className="space-x-5" data-aos="fade-left">
            <span className="font-extrabold font-nunito">Seller Name:</span>
            <span>{sellerName}</span>
          </p>
          <p className="space-x-5" data-aos="fade-left">
            <span className="font-extrabold font-nunito">Seller Email:</span>
            <span>{sellerEmail}</span>
          </p>
          <p className="space-x-5" data-aos="fade-left">
            <span className="font-extrabold font-nunito">
              Available Quantity:
            </span>
            <span>{availableQty}</span>
          </p>

          {/* buy now button, will implement action later */}
          <button
            className="btn btn-primary rounded-full w-44 normal-case !text-lg"
            data-aos="fade-left"
          >
            Buy Now
          </button>
          <p
            className="flex items-center gap-3 font-extrabold font-nunito"
            data-aos="zoom-in"
          >
            Share with us:
            <FaFacebookF className="cursor-pointer hover:text-primary duration-300" />
            <FaTwitter className="cursor-pointer hover:text-primary duration-300" />
            <FaPinterest className="cursor-pointer hover:text-primary duration-300" />
            <FaGoogle className="cursor-pointer hover:text-primary duration-300" />
          </p>
        </div>
      </div>

      {/* related toys */}
      <RelatedToys relatedToys={relatedToys} />
    </div>
  );
};

export default ToyDetails;
