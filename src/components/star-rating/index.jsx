import { useState } from "react";

import { FaStar } from "react-icons/fa";
import "./styles.css";

const StarRating = ({ numberOfStars }) => {
  const [currentRating, setCurrentRating] = useState(-1);
  const [hoverValue, setHoverValue] = useState(-1);

  return (
    <div className="container">
      <div className="star-rating">
        {[...Array(numberOfStars)].map((_, index) => (
          <div
            className={`star ${
              (index <= hoverValue && "hover-over") ||
              (hoverValue === -1 && index <= currentRating && "selected")
            }`}
            key={index}
            onMouseEnter={() => setHoverValue(index)}
            onMouseLeave={() => setHoverValue(-1)}
            onClick={() => setCurrentRating(index)}
          >
            <FaStar />
            <p>{index + 1}</p>
          </div>
        ))}
      </div>
      <p className="tagline">Rate your experience!</p>
    </div>
  );
};

export default StarRating;
