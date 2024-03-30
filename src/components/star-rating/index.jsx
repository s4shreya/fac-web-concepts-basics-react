import { useState } from "react";

import { FaStar } from "react-icons/fa";
import "./styles.css";

const StarRating = () => {
  const [currentRating, setCurrentRating] = useState(-1);

  const stars = [];
  for (let i = 0; i < 10; i++) stars.push(<FaStar />);

  return (
    <div className="container">
      <div className="star-rating">
        {stars.map((star, index) => (
          <div
            className={`star ${index <= currentRating && "selected"}`}
            key={index}
            onClick={() => setCurrentRating(index)}
          >
            {star}
            <p>{index + 1}</p>
          </div>
        ))}
      </div>
      <p className="tagline">Rate your experience!</p>
    </div>
  );
};

export default StarRating;
