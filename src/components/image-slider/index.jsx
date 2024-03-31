import { useState, useEffect } from "react";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import styles from "./styles.module.css";

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
    <div className={styles.container}>
      {loading ? (
        <div>Images are loading, Please wait....</div>
      ) : (
        <div className={styles["image-slider"]}>
          <BsArrowLeftCircleFill
            className={`${styles.arrow} ${styles["arrow-left"]}`}
          />
          {images &&
            images.length &&
            images.map((image) => 
              <img
                key={image.id}
                alt={image.author}
                src={image.download_url}
                className={styles["current-image"]}
              />
            )}
          <BsArrowRightCircleFill
            className={`${styles.arrow} ${styles["arrow-right"]}`}
          />
          <span className={styles["circle-indicators"]}>
            {images.length &&
              images.map((_, index) => (
                <button
                  key={index}
                  className={styles["current-indicator"]}
                ></button>
              ))}
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
