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
      .then((data) => {
        const productsArray = [...productsList, ...data.products];
        setProductsList(productsArray);
        setLoading(false);
      })
      .catch((error) => console.log(`!!!error occurred: ${error.message}!!!`));
  }, [pageNo]);

  const handleLoadMoreProducts = () => {
    setPageNo((prev) => prev + 1);
    console.log(`page no is ${pageNo}`);
  };

  return (
    <div>
      {loading ? (
        <div> Please wait... </div>
      ) : (
        <div>
          {productsList.map((product) => (
            <div key={product.id}>
              {product.id} " "{product.title}
            </div>
          ))}{" "}
          <button onClick={handleLoadMoreProducts}>Load more products</button>
        </div>
      )}
    </div>
  );
};

export default LoadMoreData;
