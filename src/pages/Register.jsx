import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const Register = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Breadcrumb heading="Register">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Register</li>
        </ul>
      </Breadcrumb>

      <div className="container my-16">
        <div className="card w-full max-w-3xl mx-auto bg-base-200 my-10 rounded-none">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered focus:outline-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered focus:outline-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                className="input input-bordered focus:outline-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered focus:outline-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered focus:outline-none"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <p className="text-center mt-2">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:text-primary-focus hover:underline font-semibold"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
