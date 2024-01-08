import Image from "next/image";

const AboutUs = () => {
  return (
    <section className=" relative md:mt-[10.88rem] mt-[4rem] padding-x ">
      <Image
        src="/assets/image/bubble.svg"
        alt=""
        width={400}
        height={400}
        className="absolute right-0 md:-top-[11rem] bottom-0 z-[1] md:w-[35%] w-[50%]"
      />
      <div className="flex-between md:flex-row flex-col-reverse w-full">
        <div className="md:w-[60%] w-full md:mt-0 mt-[4rem]">
          <h2 className="md:mb-10 mb-2 font-bold md:text-4xl text-[1rem] md:text-start text-center">Who Are We?</h2>
          <p className=" md:text-xl text-[0.6rem] md:leading-[1.875rem] leading-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            nisi vel dui dignissim laoreet. Fusce eu turpis vel urna fermentum
            tincidunt. Sed id velit sed nisl cursus vestibulum. Duis tincidunt
            urna ac justo cursus, a efficitur urna feugiat. Suspendisse potenti.
            Quisque vel augue in purus volutpat vestibulum. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Nulla facilisi. Proin vehicula, purus ut convallis
            feugiat, quam odio convallis ligula, nec venenatis nunc elit vel ex.
            Sed interdum, ligula vel efficitur feugiat, odio turpis lacinia
            mauris, et vestibulum nulla quam a ex.
            <br />
            <br />
            Phasellus nec dictum elit. Curabitur a risus ac lacus fringilla
            congue. In hac habitasse platea dictumst. Sed imperdiet, ligula vel
            congue dictum, dui metus aliquet nisl, vitae bibendum tellus metus
            id velit. Aenean non eros vitae elit tincidunt tincidunt. Maecenas
            vestibulum sapien vitae efficitur malesuada. Vivamus auctor, libero
            et tincidunt dictum, odio justo viverra odio, eu feugiat nisl libero
            nec metus. Nunc auctor eros ac odio imperdiet, a interdum odio
            facilisis. Sed aliquet elit nec mauris varius, vel fermentum elit
            sodales.
          </p>
        </div>
        <div className="md:w-[35%] w-full flex-center md:flex-col flex-row">
          <div className=" flex-center relative md:ml-8">
            <Image
              src="/assets/image/hero-logo.png"
              alt="Tekskillup"
              width={220}
              height={250}
              className="md:w-full w-[65%]"
            />
            <div className=" rounded-2xl absolute md:-right-2 right-4 top-[41%] h-[50%] w-[25%] bg-white"></div>
          </div>
          <span className=" font-bold md:text-[5.5rem] text-[1.875rem] relative md:right-0 right-4">Tekskillup</span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
