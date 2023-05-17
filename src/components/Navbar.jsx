import { HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";

const Navbar = () => {
  return (
    <div className="container navbar justify-between py-4">
      <Link to="/" className="shrink-0">
        <img src={logo} alt="logo" className="w-40" />
      </Link>

      {/* for larger device */}
      <div className="hidden md:flex w-full justify-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all-toys">All Toys</NavLink>
          </li>
          <li>
            <NavLink to="/seller/toys">My Toys</NavLink>
          </li>
          <li>
            <NavLink to="/seller/add-toy">Add A Toy</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </ul>
      </div>
      <div className="shrink-0">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-primary btn-circle avatar overflow-hidden p-0.5"
          >
            <img
              src="https://avatars.githubusercontent.com/u/119802653?v=4"
              alt=""
              className="w-full aspect-square object-cover object-center rounded-full"
            />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Log Out</a>
            </li>
          </ul>
        </div>

        {/* for small device */}
        <div className="dropdown dropdown-end md:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle text-lg font-normal"
          >
            <HiMenuAlt3 className="text-2xl mr-1" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-toys">All Toys</NavLink>
            </li>
            <li>
              <NavLink to="/seller/toys">My Toys</NavLink>
            </li>
            <li>
              <NavLink to="/seller/add-toy">Add A Toy</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
