import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

// import Image from "next/image";
const ReviewCard = ({ review }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    // Calculate the difference between current index and rating
    const difference = review.rating - i;

    if (difference >= 1) {
      // Full star
      stars.push(
        <span key={i} className="text-primary_700">
          <FaStar />
        </span>
      );
    } else if (difference >= 0.5) {
      // Half star
      stars.push(
        <span key={i} className="text-primary_700">
          <FaStarHalfAlt />
        </span>
      );
    } else {
      // Empty star
      stars.push(
        <span key={i} className="text-primary_700">
          <FaRegStar />
        </span>
      );
    }
  }

  return (
    <div className="my-3 rounded-lg bg-white p-4 shadow-md">
      <div className="text-md font-semibold uppercase text-primary_700">
        {review.name}
      </div>
      <div className="flex gap-0.5">{stars}</div>
      <p className="mt-2 text-gray-500">{review.text}</p>
    </div>
  );
};

export default ReviewCard;
