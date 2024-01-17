"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              {/* <h4 className="font-medium uppercase text-black dark:text-white">
                Launch Your SaaS Fast
              </h4> */}
              <h2 className="relative mb-6 text-black dark:text-white xl:text-hero text-center text-4xl font-extrabold leading-[60px] inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg">
                What is Tekskillup?
              </h2>
              <p>
                Tekskillup is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2 text-teal-800 text-xl">
                    Learn More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill=""
                    stroke="teal"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/assets/image/pana.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
               src="/assets/image/pana.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}


      {/* <!-- ===== About Break Section Starts ===== --> */}
   <div class="w-[1444px] h-[116px] px-[51px] py-6 bg-teal-800 bg-opacity-5 rounded-lg border justify-start       items-start gap-[41px] inline-flex">
    <div class="w-[68px] self-stretch origin-top-left rotate-90 border border-zinc-100"></div>
    </div>
{/* <!-- ===== About Break Section End ===== --> */}



      {/* <!-- ===== About Two Start ===== --> */}
      <section className="mt-20 overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8  lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
               src="/assets/image/about-hero.jpeg"
               width={500}
               height={575.94}
                alt="About"
                className=" w-[575.94px] h-[500px] rounded-[14.79px] border-2 border-black border-opacity-30"
              />
              <Image
              src="/assets/image/about-hero.jpeg"
              width={500}
               height={575.94}
                alt="About"
                className=" hidden w-[575.94px] h-[500px] rounded-[14.79px] border-2 border-black border-opacity-30"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              {/* <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  New
                </span>{" "}
                SaaS Boilerplate for Next.js
              </span> */}
              <h2 className="relative mb-6 mt-20 text-4xl font-bold text-black dark:text-white xl:text-hero inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                 Benefit from our online learning expert
              </h2>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                ultricies lacus non fermentum ultrices. Fusce consectetur le.
              </p> */}

              <div className="mt-[17.5] flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border">
                  <Image
               src="/assets/icons/case.svg"
               width={5}
               height={5}
                alt="About"
                className=" w-[575.94px] h-[500px] rounded-[14.79px] border-2 border-black border-opacity-30"
              />
                </div>
                <div className="w-3/4">
                  <h3 class="text-black text-3xl font-semibold font-['Open Sans'] leading-[39px]">Online Degree</h3>
                  <p>Contrary to popular belief, Lorem sof hs gig hhhhh
Contrary to popular belief, Lorem sof hs gig hhhhh</p>
                </div>
              </div>
              <div className="mt-[17.5] flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 class="text-black text-3xl font-semibold font-['Open Sans'] leading-[39px]">Short Course</h3>
                  <p>Contrary to popular belief, Lorem sof hs gig hhhhh
Contrary to popular belief, Lorem sof hs gig hhhhh</p>
                </div>
              </div>
              <div className="mt-[17.5] flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 class="text-black text-3xl font-semibold font-['Open Sans'] leading-[39px]">Short Course</h3>
                  <p>Contrary to popular belief, Lorem sof hs gig hhhhh
Contrary to popular belief, Lorem sof hs gig hhhhh</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
