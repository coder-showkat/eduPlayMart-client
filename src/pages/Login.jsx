import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const Login = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Breadcrumb heading="Login">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Login</li>
        </ul>
      </Breadcrumb>

      <div className="container my-16">
        <div className="card w-full max-w-3xl mx-auto bg-base-200 my-10 rounded-none">
          <form onSubmit={handleLogin} className="card-body">
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered focus:outline-none"
              />
            </div>
            <div className="form-control mt-6 mb-4">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <p className="text-center mt-2">
                Don&#39;t have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary hover:text-primary-focus hover:underline font-semibold"
                >
                  Register
                </Link>
              </p>
            </div>
            <div className="divider w-1/2 mx-auto">OR</div>
            <button type="button" className="btn btn-outline mt-4 normal-case">
              Continue with <FcGoogle className="text-xl ml-2" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
