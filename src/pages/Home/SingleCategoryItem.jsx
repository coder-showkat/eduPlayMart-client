/* eslint-disable react/prop-types */
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const SingleCategoryItem = ({ item }) => {
  const { _id, image, name, price, rating } = item;
  return (
    <div className="card card-compact w-full shadow-sm rounded-none">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-full aspect-square object-cover object-center"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-nunito font-extrabold">{name}</h2>
        <StarRatings
          rating={rating}
          starRatedColor="#FEBF00"
          starDimension="20px"
          starSpacing="1px"
          numberOfStars={5}
          name="rating"
        />
        <div className="card-actions justify-between mt-2">
          <h3 className="text-lg font-semibold">${price}</h3>
          <Link
            to={`/toy/${_id}`}
            className="text-2xl text-primary hover:text-primary-focus active:scale-95"
          >
            <HiArrowRight className="animate-bounce" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryItem;
