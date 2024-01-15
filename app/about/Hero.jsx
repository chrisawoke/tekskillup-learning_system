const Hero = () => {
  return (
    <section className=" h-fit text-white about-hero-img"  style={{backgroundImage: "url(assets/image/about-hero.jpeg)"}}>
        <div className="lg:min-h-[480px] py-24 flex-center flex-col padding-x text-center bg-[rgba(0,0,0,0.6)] " >
           <h1 className="font-bold text-2xl lg:text-4xl md:mb-5 mb-2">About Tekskillup</h1>
           <p className=" mt-2 text-xs leading-5 lg:text-[20px] lg:leading-8 md:w-[80%] md:mx-auto">Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.</p>
        </div>
    </section>
  )
}

export default Hero