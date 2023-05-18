import Countdown from "react-countdown";
import bg from "../../assets/images/discount_bg.webp";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <p className="text-xl font-medium">Sorry! The Offer is expired!</p>;
  } else {
    return (
      <div className="max-w-3xl mx-auto px-8 py-12 bg-secondary/80 text-white rounded-3xl flex items-start justify-center gap-12 md:gap-8 flex-wrap text-7xl font-bold">
        <div>
          <h1>{days}</h1>
          <p className="text-lg font-normal">Days</p>
        </div>
        <span className="hidden md:block">:</span>
        <div>
          <h1>{hours}</h1>
          <p className="text-lg font-normal">Hours</p>
        </div>
        <span className="hidden md:block">:</span>
        <div>
          <h1>{minutes}</h1>
          <p className="text-lg font-normal">Minutes</p>
        </div>
        <span className="hidden md:block">:</span>
        <div>
          <h1>{seconds}</h1>
          <p className="text-lg font-normal">Seconds</p>
        </div>
      </div>
    );
  }
};

const Discount = () => {
  return (
    <div
      className="h-[800px] my-20 bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(254, 191, 0, 0.8), rgba(254, 191, 0, 0.8)), url(${bg})`,
      }}
    >
      <div className="container text-center space-y-6">
        <h1 className="text-5xl xl:text-6xl font-extrabold font-nunito">
          15% Discount <br />
          On All Kid&#39;s Education Toys
        </h1>
        <p className="text-3xl pb-6">Offer Expires on</p>

        <Countdown date={Date.now() + 31557600000} renderer={renderer} />

        <button className="btn btn-lg btn-accent hover:bg-neutral hover:text-white normal-case rounded-full w-40 md:w-48 xl:w-52 font-extrabold md:!text-2xl">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Discount;
