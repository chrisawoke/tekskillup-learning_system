const Hero = () => {
  const contactMessage = `
   Welcome to Tekskillup's Contact page, we’re here to assist you,
   whether you have questions, feedback, or inquiries, we would love to
   hear from you, your satisfaction is our priority. Send us a message
   and connect with us to get started as soon as possible. You can
   reach us through our other social platforms below.
`;

  return (
    <main>
      <header
        style={{
          backgroundImage: `url('/assets/image/ContactHero.png')`,
          backgroundSize: "cover",
        }}
        className="md:min-h-screen py-10 px-5 flex items-center justify-center md:bg-cover"
      >
        <div className=" text-center text-white px:1 md:px-20">
          <h2 className="text-2xl font-bold mb-10 md:text-[40px] md:font-extrabold">
            Contact Us
          </h2>
          <p className="text-md font-light md:text-[20px]">{contactMessage}</p>
        </div>
      </header>
    </main>
  );
};

export default Hero;
