import React from "react";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

const ProductCard = ({ products }) => {
  return (
    <div className={styles.ProductCard}>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div className="product-card">
              <div className="product-img">
                <img src={product.productImageLink}></img>
              </div>
              <div className="product-details">
                <span className="product-name">{product.productTitle}</span>
                <span className="product-price-display">
                  &#8377; {product.productPrie}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductCard.propTypes = {};

ProductCard.defaultProps = {};

export default ProductCard;
