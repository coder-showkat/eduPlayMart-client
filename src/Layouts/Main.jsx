import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

const Main = () => {
  const { state } = useNavigation();

  return (
    <>
      <Navbar />
      <ScrollRestoration />
      {state === "loading" ? <Spinner /> : <Outlet />}
      <Footer />
    </>
  );
};

export default Main;
