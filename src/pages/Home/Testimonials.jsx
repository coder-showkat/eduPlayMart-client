import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import avatar1 from "../../assets/images/avatar_1.avif";
import avatar2 from "../../assets/images/avatar_2.avif";
import avatar3 from "../../assets/images/avatar_3.avif";
import avatar4 from "../../assets/images/avatar_4.avif";

const testimonials = [
  {
    id: 1,
    avatar: avatar1,
    name: " Sarah",
    comment:
      "My kids absolutely love the eduKits! They provide a perfect balance of fun and educational value. I've seen a significant improvement in their problem-solving and critical thinking skills. Highly recommended!",
  },
  {
    id: 2,
    avatar: avatar2,
    name: "Michael",
    comment:
      "I was searching for educational toys that could engage my children and foster their creativity. The eduKit marketplace was a game-changer! The variety of toys available is impressive, and the quality is top-notch. My kids are always excited to receive their new eduKits!",
  },
  {
    id: 3,
    avatar: avatar3,
    name: "Emily",
    comment:
      "As an educator, I'm always on the lookout for educational resources that can enhance learning outside the classroom. The eduKit marketplace has been a fantastic discovery. The toys are not only educational but also aligned with the curriculum. It's a win-win for both parents and teachers!",
  },
  {
    id: 4,
    avatar: avatar4,
    name: "David",
    comment:
      "I've tried several educational toy websites, but none of them compare to the eduKit marketplace. The website is user-friendly, and the ordering process is seamless. The customer support team is also incredibly helpful and responsive. I'm impressed with the overall experience!",
  },
];

const Testimonials = () => {
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
