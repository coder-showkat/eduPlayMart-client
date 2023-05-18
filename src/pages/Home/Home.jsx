import Banner from "./Banner";
import Features from "./Features";
import Gallery from "./Gallery";
import HowItWorks from "./HowItWorks";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <Gallery />
      <Features />
      <ShopByCategory />
    </div>
  );
};

export default Home;
