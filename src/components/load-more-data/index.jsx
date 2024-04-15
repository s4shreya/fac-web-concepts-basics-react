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
        // const productsArray = [...productsList, ...data.products];
        setProductsList(prev => [...prev, ...data.products]);
        console.log(`products array ${JSON.stringify(productsList)}`)
        setLoading(false);
      })
      .catch((error) => console.log(`!!!error occurred: ${error.message}!!!`));
  }, [pageNo]);

  const handleLoadMoreProducts = () => {
    setPageNo((prev) => prev + 1);
    console.log(`page no is: ${pageNo}`);
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <div> Please wait... </div>
      ) : (
        <div className={styles["product-container"]}>
          {productsList.map((product) => (
            <div key={product.id} className={styles.product}>
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
            </div>
          ))}
          <div className={styles["button-container"]}>
            <button onClick={handleLoadMoreProducts}>Load more products</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadMoreData;
