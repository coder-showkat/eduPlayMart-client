import Banner from "./Banner";
import Discount from "./Discount";
import Features from "./Features";
import Gallery from "./Gallery";
import HowItWorks from "./HowItWorks";
import ShopByCategory from "./ShopByCategory";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <Gallery />
      <Features />
      <ShopByCategory />
      <Discount />
      <Testimonials />
    </div>
  );
};

export default Home;
