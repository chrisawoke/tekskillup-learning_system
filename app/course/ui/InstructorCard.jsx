import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const InstructorCard = ({ instructor }) => {
  return (
    <div className="my-4 text-center md:text-left flex flex-col max-w-[43%] md:max-w-[28%] flex-shrink overflow-hidden rounded shadow-md">
      <Image
        className="w-full"
        width={50}
        height={50}
        src={instructor.photo}
        alt={instructor.name}
      />
      <div className="flex items-center justify-between px-5 py-2">
        {instructor.social.twitter && (
          <a target="_blank" href={instructor.social.twitter}>
            <FaTwitter
              className="hover:scale-110 transition-transform w-6 h-6 lg:w-8 lg:h-8"
              fill="#087861"
            />
          </a>
        )}
        {instructor.social.linkedin && (
          <a target="_blank" href={instructor.social.linkedin}>
            <FaLinkedin
              className="hover:scale-110 transition-transform w-6 h-6 lg:w-8 lg:h-8"
              fill="#087861"
            />
          </a>
        )}
        {instructor.social.facebook && (
          <a target="_blank" href={instructor.social.facebook}>
            <FaFacebook
              className="hover:scale-110 transition-transform w-6 h-6 lg:w-8 lg:h-8"
              fill="#087861"
            />
          </a>
        )}
      </div>
      <div className="md:px-6 px-3 py-4">
        <div className="mb-2 text-xl font-bold">{instructor.name}</div>
        <p className="text-base text-gray-700">{instructor.description}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
