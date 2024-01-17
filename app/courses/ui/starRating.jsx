export default function StarRating({ rating }) {
    // Calculate the number of each type of star needed
    const fullStars = Math.floor(rating);
    const quarterStars = rating % 1 >= 0.25 ? 1 : 0;
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const threeQuarterStars = rating % 1 >= 0.75 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
  
    const fullStarGradientId = "grad-full";
    const halfStarGradientId = "grad-half";
    const emptyStarGradientId = "grad-empty";
  
    // Define the SVG for a star with a dynamic gradient ID
    const StarSVG = ({ gradientId }) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5">
        <defs>
          <linearGradient id={gradientId}>
            <stop offset={gradientId === emptyStarGradientId ? "0%" : "100%"} stopColor="gold"/>
            <stop offset={gradientId === fullStarGradientId ? "100%" : "0%"} stopColor="grey"/>
          </linearGradient>
        </defs>
        <path fill={`url(#${gradientId})`} d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
      l11.547-1.2L16.026,0.6L20.388,10.918z"/>
      </svg>
    );
  
    return (
      <div className="flex items-center">
        {/* Render full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <StarSVG key={`full-${i}`} gradientId={fullStarGradientId} />
        ))}
        {/* Render half star if needed */}
        {halfStars === 1 && (
          <StarSVG key={`half`} gradientId={halfStarGradientId} />
        )}
        {/* Render empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <StarSVG key={`empty-${i}`} gradientId={emptyStarGradientId} />
        ))}
      </div>
    );
  }
  