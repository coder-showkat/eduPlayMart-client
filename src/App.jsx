import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import { homeLoader } from "./loader/home.loader";
import { toyDetailsLoader } from "./loader/toyDetails.loader";
import AllToys from "./pages/AllToys";
import Blogs from "./pages/Blogs";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddAToy from "./pages/privateRoutes/AddAToy";
import MyToys from "./pages/privateRoutes/MyToys/MyToys";
import PrivateRoute from "./pages/privateRoutes/PrivateRoute";
import ToyDetails from "./pages/privateRoutes/ToyDetails/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/all-toys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:5000/api/toys"),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: toyDetailsLoader,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/seller/toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/api/toys"),
      },
      {
        path: "/seller/add-toy",
        element: (
          <PrivateRoute>
            <AddAToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
