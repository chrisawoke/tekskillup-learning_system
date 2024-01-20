import Image from "next/image";

const Support = () => {
  return (
    <section className="padding-x flex-between md:flex-row flex-col py-14 overflow-hidden">
      <div className="h-full">
        <Image
          src="/assets/image/team-girl.png"
          alt=""
          width={150}
          height={150}
          className="w-[18rem] md:mb-0 mb-14 object-contain h-full relative md:-left-36"
        />
      </div>
      <div className="lg:w-[60%] md:w-[70%] w-full text-center">
        <h2 className="font-bold lg:text-4xl md:text-2xl text-[1.35rem]">
          You won’t have to do it alone
        </h2>
        <p className=" mt-5 mb-8 lg:text-base md:text-[.78rem] sm:text-[0.9rem] text-[0.825rem]">
          Our <b>Instructor Support Team</b> is here to answer your questions
          and review your test video, while our Teaching Center gives you plenty
          of resources to help you through the process. Plus, get the support of
          experienced instructors in our <b>online community</b>.
        </p>
        <a
          className="lg:text-base md:text-[.78rem] sm:text-[0.9rem] text-[0.825rem] text-purple-700 font-bold underline"
          href="/"
        >
          Need more details before you start? Learn more.
        </a>
      </div>
      <div className="h-full md:block hidden">
        <Image
          src="/assets/image/team-girl.png"
          alt=""
          width={150}
          height={150}
          className="w-[18rem] h-full relative -right-36"
        />
      </div>
    </section>
  );
};

export default Support;
