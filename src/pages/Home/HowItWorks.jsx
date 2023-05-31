const HowItWorks = ({ contents }) => {
  return (
    <div className="container my-24 pt-8">
      {/* heading */}
      <h1
        className="text-center text-4xl sm:text-5xl font-extrabold mb-12 font-nunito"
        data-aos="zoom-in"
      >
        Here&rsquo;s how it works
      </h1>

      {/* contents */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {contents.map((content) => (
          <div
            key={content.id}
            className="space-y-5 text-center"
            data-aos="fade-up"
            data-aos-delay={100}
          >
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
