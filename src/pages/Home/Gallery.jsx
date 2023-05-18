import img1 from "../../assets/images/gallery/gallery-1.webp";
import img2 from "../../assets/images/gallery/gallery-2.webp";
import img3 from "../../assets/images/gallery/gallery-3.webp";
import img4 from "../../assets/images/gallery/gallery-4.jpg";
import img5 from "../../assets/images/gallery/gallery-5.jpg";
import img6 from "../../assets/images/gallery/gallery-6.jpg";
import img7 from "../../assets/images/gallery/gallery-7.webp";
import img8 from "../../assets/images/gallery/gallery-8.jpg";

const gallery = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 7,
    img: img7,
  },
  {
    id: 8,
    img: img8,
  },
];

const Gallery = () => {
  return (
    <div className="container my-20">
      <h1 className="text-center text-5xl font-extrabold mb-12 font-nunito">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 xl:gap-8">
        {gallery.map((item) => (
          <img
            key={item.id}
            src={item.img}
            className="w-full aspect-square object-cover object-center border-2 border-white custom-shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
