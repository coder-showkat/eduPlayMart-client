import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Breadcrumb from "../components/Breadcrumb";
import Spinner from "../components/Spinner";
import usePageTitle from "../hooks/usePageTitle";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  usePageTitle("Login");
  const { user, loading, error, loginUser, loginWithGoogle } =
    useContext(AuthContext);

  const { state } = useLocation();
  const from = state?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const result = await loginUser(email, password);
    if (result.message) Swal.fire({ icon: "success", text: result.message });
    form.reset();
  };

  const handleGoogleLogin = async () => {
    const result = await loginWithGoogle();
    if (result.message) Swal.fire({ icon: "success", text: result.message });
  };

  if (loading) return <Spinner />;
  if (user) return <Navigate to={from} replace={true} />;

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
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="email"
                className="input input-bordered focus:outline-none"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="password"
                className="input input-bordered focus:outline-none"
              />
            </div>
            {error && <p className="pt-2 text-center text-error">{error}</p>}
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
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="btn btn-outline mt-4 normal-case"
            >
              Continue with <FcGoogle className="text-xl ml-2" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
