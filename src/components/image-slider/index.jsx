import { useState, useEffect } from "react";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (url) => {
    try {
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
      console.log(`Error occurred in image-slide container: ${error.message}`);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (url !== "") fetchImages(url);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div>Images are loading, Please wait....</div>
      ) : (
        <>
          <BsArrowLeftCircleFill className="arrow arrow-left" />
          {images &&
            images.length &&
            images.map((image) => {
              {
                console.log(
                  `loading is ${loading} images is ${JSON.stringify(
                    image.download_url
                  )}`
                );
              }
              <img
                key={image.id}
                alt={image.author}
                src={image.download_url}
                className="current-image"
              />;
            })}
          <BsArrowRightCircleFill className="arrow arrow-right" />
          <span className="circle-indicators">
            {images.length &&
              images.map((_, index) => (
                <button key={index} className="current-indicator"></button>
              ))}
          </span>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
