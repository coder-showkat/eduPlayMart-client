import Aos from "aos";
import { useEffect } from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

const Main = () => {
  const { state } = useNavigation();
  useEffect(() => {
    Aos.init({
      offset: 150,
      duration: 1000,
    });
  }, []);

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
