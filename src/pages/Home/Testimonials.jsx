import { useLoaderData } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  const { testimonials } = useLoaderData();
  return (
    <div className="container my-20">
      <h1 className="text-center text-5xl font-extrabold mb-12 font-nunito">
        What our customers say
      </h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        grabCursor
        autoplay={{
          disableOnInteraction: false,
          delay: 6000,
        }}
        pagination={{
          el: ".pagination",
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full text-center space-y-6">
              <img
                src={item.avatar}
                alt=""
                className="w-20 aspect-square object-cover object-center rounded-full mx-auto"
              />
              <p className="text-lg px-2">{item.comment}</p>
              <h2 className="text-lg font-bold">{item.name}</h2>
            </div>
          </SwiperSlide>
        ))}
        <div className="pagination !w-fit mx-auto pt-5" />
      </Swiper>
    </div>
  );
};

export default Testimonials;
