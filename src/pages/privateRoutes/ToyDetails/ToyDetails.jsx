import { FaFacebookF, FaGoogle, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Breadcrumb from "../../../components/Breadcrumb";
import RelatedToys from "./RelatedToys";

const ToyDetails = () => {
  const { toyDetails, relatedToys } = useLoaderData();
  const {
    image,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQty,
    details,
  } = toyDetails;

  console.log(relatedToys);

  return (
    <div>
      <Breadcrumb heading="Toy">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-toys">All Toys</Link>
          </li>
          <li>{name}</li>
        </ul>
      </Breadcrumb>

      <div className="container my-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="h-full relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center aspect-square md:aspect-auto md:absolute"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold font-nunito pb-2">{name}</h1>
          <StarRatings
            rating={rating}
            starRatedColor="#FEBF00"
            starDimension="20px"
            starSpacing="1px"
            numberOfStars={5}
            name="rating"
          />
          <p>{details}</p>
          <p className="space-x-5">
            <span className="font-extrabold font-nunito">Price:</span>
            <span>${price}</span>
          </p>
          <p className="space-x-5">
            <span className="font-extrabold font-nunito">Seller Name:</span>
            <span>{sellerName}</span>
          </p>
          <p className="space-x-5">
            <span className="font-extrabold font-nunito">Seller Email:</span>
            <span>{sellerEmail}</span>
          </p>
          <p className="space-x-5">
            <span className="font-extrabold font-nunito">
              Available Quantity:
            </span>
            <span>{availableQty}</span>
          </p>
          <button className="btn btn-primary rounded-full w-44 normal-case !text-lg">
            Buy Now
          </button>
          <p className="flex items-center gap-3 font-extrabold font-nunito">
            Share with us:
            <FaFacebookF className="cursor-pointer hover:text-primary duration-300" />
            <FaTwitter className="cursor-pointer hover:text-primary duration-300" />
            <FaPinterest className="cursor-pointer hover:text-primary duration-300" />
            <FaGoogle className="cursor-pointer hover:text-primary duration-300" />
          </p>
        </div>
      </div>

      <RelatedToys relatedToys={relatedToys} />
    </div>
  );
};

export default ToyDetails;
