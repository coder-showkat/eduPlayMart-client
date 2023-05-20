import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import Spinner from "./components/Spinner";
import { homeLoader } from "./loader/home.loader";
import { myToysLoader } from "./loader/myToys.loader";
import { toyDetailsLoader } from "./loader/toyDetails.loader";
import AllToys from "./pages/AllToys";
import Blog from "./pages/Blog";
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
        loader: () => fetch("https://eduplaymart-sam.vercel.app/api/toys"),
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
        loader: myToysLoader,
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
        loader: () => fetch("https://eduplaymart-sam.vercel.app/api/blogs"),
      },
      {
        path: "/blog/:id",
        element: <Blog />,
        loader: ({ params }) =>
          fetch(`https://eduplaymart-sam.vercel.app/api/blogs/${params.id}`),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider fallbackElement={<Spinner />} router={router} />;
};

export default App;
