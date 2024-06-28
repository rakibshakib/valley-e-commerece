import React from "react";

const Rating: React.FC<RatingProps> = ({ rating = 0, totalStars = 5 }) => {
  // Ensure rating is within the bounds of 0 and totalStars
  const filledStars = Math.min(Math.max(Math.floor(rating), 0), totalStars);
  const emptyStars = totalStars - filledStars;

  return (
    <div className="flex justify-center">
      {Array.from({ length: filledStars }).map((_, index) => (
        <span key={`filled-${index}`} className="text-yellow-500 text-[16px]">
          ★
        </span>
      ))}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-400 text-[16px]">
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
