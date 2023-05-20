import { useState } from "react";
import { HiPencil } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Breadcrumb from "../../../components/Breadcrumb";
import EditToy from "./EditToy";

const MyToys = () => {
  const loaderData = useLoaderData();
  const [toys, setToys] = useState(loaderData);
  const [selectedToy, setSelectedToy] = useState({});
  console.log(toys);

  return (
    <>
      <Breadcrumb heading="My Toys">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Seller</Link>
          </li>
          <li>My Toys</li>
        </ul>
      </Breadcrumb>
      <div className="container mt-20 mb-10">
        {toys.length > 0 ? (
          <div className="overflow-x-auto w-full">
            <table className="table w-full text-center">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="font-extrabold text-base">Toy Name</th>
                  <th className="font-extrabold text-base">Subcategory</th>
                  <th className="font-extrabold text-base">Price</th>
                  <th className="font-extrabold text-base">
                    Available Quantity
                  </th>
                  <th className="font-extrabold text-base"></th>
                  <th className="font-extrabold text-base"></th>
                  <th className="font-extrabold text-base"></th>
                </tr>
              </thead>
              <tbody>
                {/* rows */}
                {toys.map((toy, i) => (
                  <tr key={toy._id}>
                    <th>{i + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={toy.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div className="text-start">
                          <div className="font-bold">{toy.name}</div>
                          <StarRatings
                            rating={toy.rating}
                            starRatedColor="#FEBF00"
                            starDimension="16px"
                            starSpacing="1px"
                            numberOfStars={5}
                            name="rating"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{toy.subCategory}</td>
                    <td>${toy.price}</td>
                    <td>{toy.availableQty}</td>
                    <th>
                      <Link
                        to={`/toy/${toy._id}`}
                        className="btn btn-primary btn-xs"
                      >
                        details
                      </Link>
                    </th>
                    <th>
                      <label
                        htmlFor="editToy"
                        onClick={() => setSelectedToy(toy)}
                        title="Edit"
                        className="text-primary text-2xl hover:text-primary-focus active:scale-90 cursor-pointer"
                      >
                        <HiPencil />
                      </label>
                    </th>
                    <th>
                      <button
                        title="Delete"
                        className="text-secondary text-3xl hover:text-secondary-focus active:scale-90"
                      >
                        <MdDeleteForever />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 my-5">
            <p className="text-center text-error text-lg">
              You did not add any items to sell!
            </p>
            <Link
              to="/seller/add-toy"
              className="btn btn-primary w-44 rounded-full"
            >
              Add A Toy
            </Link>
          </div>
        )}
      </div>
      <EditToy selectedToy={selectedToy} setToys={setToys} />
    </>
  );
};

export default MyToys;
