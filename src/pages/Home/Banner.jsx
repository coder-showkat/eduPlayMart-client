import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "../../assets/images/slider1-bg.jpg";
import bg2 from "../../assets/images/slider2-bg.jpg";
import bg3 from "../../assets/images/slider3-bg.jpg";

const bannerContent = [
  {
    id: 1,
    subHeading: "Big fun for kid's!",
    heading: "A World To Explore",
    desc: "Active toys for smart and active kids. Bring fun and non-stop learning for your little ones.",
    img: bg1,
  },
  {
    id: 2,
    subHeading: "Your wow! Store",
    heading: "The Ultimate Toy Store",
    desc: "Delivering smile with toys. Get your unbeatable fun and learning experience with our creative toys.",
    img: bg2,
  },
  {
    id: 3,
    subHeading: "Fuel the imagination!",
    heading: "Extraordinary Learning Toys",
    desc: "Premium toy for the genuine start. The best place to your buy dream toys. We provide toys for all age kids.",
    img: bg3,
  },
];

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      grabCursor
      loop={true}
      autoplay={{
        disableOnInteraction: false,
        delay: 6000,
      }}
      navigation={{
        prevEl: ".prev-btn",
        nextEl: ".next-btn",
      }}
      pagination={{
        clickable: true,
      }}
      className="relative"
    >
      {/* banner slides */}
      {bannerContent.map((content) => (
        <SwiperSlide key={content.id}>
          <div
            className="h-[600px] lg:h-[700px] bg-cover bg-center flex items-center justify-end"
            style={{ backgroundImage: `url(${content.img})` }}
          >
            <div className="bg-white/80 p-4 max-w-xl space-y-4 lg:space-y-7 mx-[8%]">
              <h3 className="text-2xl font-semibold">{content.subHeading}</h3>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-nunito text-secondary mb-2">
                {content.heading}
              </h1>
              <p className="md:text-lg pb-2">{content.desc}</p>
              <button className="btn lg:btn-lg btn-primary normal-case rounded-full w-40 md:w-44 xl:w-48 font-extrabold">
                Read more
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* navigation control buttons */}
      <div className="flex justify-between items-center absolute z-10 top-1/2 left-2 right-2 -translate-y-1/2">
        <button className="prev-btn btn glass text-primary hover:bg-primary-focus hover:text-black btn-square btn-circle text-3xl">
          <HiChevronLeft />
        </button>
        <button className="next-btn btn glass text-primary hover:bg-primary-focus hover:text-black btn-square btn-circle text-3xl">
          <HiChevronRight />
        </button>
      </div>
    </Swiper>
  );
};

export default Banner;
