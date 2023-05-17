import icon1 from "../../assets/images/icon-1.webp";
import icon2 from "../../assets/images/icon-2.webp";
import icon3 from "../../assets/images/icon-3.avif";

const contents = [
  {
    id: 1,
    img: icon1,
    title: "Inspires Curiosity",
    desc: "Our carefully curated collection of toys aims to spark curiosity in children of all ages. From STEM kits and puzzles to art supplies and language-learning tools, each toy is thoughtfully selected to engage young minds and inspire a thirst for knowledge.",
  },
  {
    id: 2,
    img: icon2,
    title: "Encourages Skill Development",
    desc: "We understand the importance of skill development in a child's growth. Our toys are specifically chosen to support various cognitive, motor, social, and emotional skills. Whether it's problem-solving, critical thinking, or fine motor skills, each toy offers unique learning opportunities.",
  },
  {
    id: 3,
    img: icon3,
    title: "Nurtures Creativity",
    desc: "We believe that creativity is a powerful force in a child's development. Our marketplace showcases toys that encourage imaginative play, artistic expression, and open-ended exploration. From building blocks and craft kits to musical instruments and pretend playsets, we provide a diverse range of options to inspire and nurture creativity.",
  },
];

const HowItWorks = () => {
  return (
    <div className="container my-24 pt-8">
      <h1 className="text-center text-5xl font-extrabold mb-12 font-nunito">
        Here&rsquo;s how it works
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {contents.map((content) => (
          <div key={content.id} className="space-y-5 text-center">
            <img
              src={content.img}
              alt={content.title}
              className="w-28 mx-auto"
            />
            <h2 className="text-2xl font-extrabold">{content.title}</h2>
            <p className="md:text-lg">{content.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
