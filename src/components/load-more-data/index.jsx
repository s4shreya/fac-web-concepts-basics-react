import { useState, useEffect } from "react";

import styles from "./styles.module.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [pageNo, setPageNo] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=20&skip=${20 * pageNo}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(`!!!error occurred: ${error.message}!!!`));
  }, []);

  return <div>l</div>;
};

export default LoadMoreData;
