import { Link } from "react-router-dom";
import bg from "../../assets/images/features_bg.webp";

const features = [
  {
    id: 1,
    icon: "https://i.ibb.co/4YS2B1Y/icon-4.png",
    name: "Beautiful & well-designed",
  },
  {
    id: 2,
    icon: "https://i.ibb.co/DGw9mCk/icon-5.png",
    name: "High durable toys",
  },
  {
    id: 3,
    icon: "https://i.ibb.co/7YtQWbz/icon-6.png",
    name: "Recyclable materials",
  },
  {
    id: 4,
    icon: "https://i.ibb.co/876Y5GJ/icon-7.png",
    name: "Safe & non-toxic",
  },
];

const Features = () => {
  return (
    <div
      className="h-[800px] bg-cover bg-center my-20 flex items-center justify-end"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="p-4 text-white max-w-xl space-y-8 lg:space-y-12 mx-[8%]">
        <h1 className="text-5xl xl:text-6xl font-extrabold font-nunito">
          Safe toys for children
        </h1>
        <ul className="space-y-6 lg:space-y-10">
          {features.map((feature) => (
            <li key={feature.id} className="flex items-center gap-3">
              <img src={feature.icon} alt="" className="w-11" />
              <h3 className="text-2xl font-medium font-nunito">
                {feature.name}
              </h3>
            </li>
          ))}
        </ul>
        <Link
          to="/all-toys"
          className="btn lg:btn-lg btn-primary normal-case rounded-full w-40 md:w-44 xl:w-48 font-extrabold"
        >
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default Features;
