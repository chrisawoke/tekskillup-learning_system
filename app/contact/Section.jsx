import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Form from "./Form";

const ContactSection = () => {
  return (
    <main>
      <div className="md:flex justify-end items-center md:py-5 hidden md:w-[100%] h-[100%]">
        <img src="/assets/image/Frame 427320786.png" alt="" />
      </div>
      <div className="font-inter px-10 py-5 mt-10 md:flex justify-center items-center w-[100%] gap-20 md:px-20 md:py-10 md:mt-[-250px]">
        <div className="md:w-[50%]">
          <Form />
        </div>
        <div className="py-10 md:w-[50%] md:py-0">
          <h2 className="text-2xl font-bold mb-5 md:text-3xl">
            Contact Message
          </h2>
          <p className="font-light">
            We will like to hear from you, please fill the form.
          </p>
          <div className="mt-20">
            <h3 className="text-lg font-semibold mb-5 md:text-2xl">Address</h3>
            <p className="font-light">
              Enugu: Phasellus nec dictum elit. Curabitur a risus ac lacus
              fringilla congue. In hac habitasse platea dictumst. Sed imperdiet,
              ligula vel congue dictum, dui metus aliquet nisl, vitae bibendum
              tellus metus id velit. Aenean non eros vitae elit tincidunt
              tincidunt. Maecenas vestibulum sapien vitae efficitur malesuada.
              Vivamus auctor, libero et tincidunt dictum, odio justo viverra
              odio, eu feugiat nisl.
            </p>
            <div className="mt-10">
              <div className="mb-7 flex justify-start items-start">
                <div className="border border-solid border-gray-500 p-2 rounded cursor-pointer">
                  {" "}
                  <IoMdMail
                    style={{ color: "rgba(10, 55, 47, 1)" }}
                    className="h-5 w-5"
                  />
                </div>
                <p className="font-normal ml-3 mt-1">support@skillbridge.com</p>
              </div>
              <div className="mb-7 flex justify-start items-start">
                <div className="border border-solid border-gray-500 p-2 rounded cursor-pointer">
                  {" "}
                  <FaPhoneAlt
                    style={{ color: "rgba(14, 151, 123, 1)" }}
                    className="h-5 w-5"
                  />
                </div>
                <p className="font-normal ml-3 mt-1">+91 00000 00000</p>
              </div>
              <div className=" flex justify-start items-start">
                <div className="border border-solid border-gray-500 p-2 rounded cursor-pointer">
                  {" "}
                  <IoLocationSharp
                    style={{ color: "rgba(247, 144, 9, 1)" }}
                    className="h-5 w-5"
                  />
                </div>
                <p className="font-normal ml-3 mt-1">Somewhere in the World</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactSection;
