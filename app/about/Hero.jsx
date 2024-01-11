const Hero = () => {
  return (
    <section className="h-fit text-white about-hero-img"  style={{backgroundImage: "url(assets/image/about-hero.jpeg)"}}>
        <div className="flex-center flex-col padding-x text-center bg-[rgba(0,0,0,0.6)] w-100 md:h-[45rem] h-[20.25rem]" >
           <h1 className="font-bold md:text-[2.375rem] text-[1.575rem] md:mb-5 mb-2">About Tekskillup</h1>
           <p className=" font-semibold md:text-xl text-[0.8rem] md:leading-[1.875rem] leading-[1.2rem]">Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.</p>
        </div>
    </section>
  )
}

export default Hero