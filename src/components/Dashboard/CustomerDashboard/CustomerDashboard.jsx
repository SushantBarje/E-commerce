import React from "react";
import PropTypes from "prop-types";
import styles from "./CustomerDashboard.module.css";
import Navbar from "../../NavBar/NavBar";
import ProductCard from "./ProductCard/ProductCard";

const CustomerDashboard = () => {
  const products = [
    {
      productId: 1,
      productTitle: "Water Bottel",
      productImageLink: "https://m.media-amazon.com/images/I/11StrPAe1IL.jpg",
      productPrice: 50.0,
    },
    {
      productId: 2,
      productTitle: "Water Bottel",
      productImageLink: "https://m.media-amazon.com/images/I/11StrPAe1IL.jpg",
      productPrice: 50.0,
    },
    {
      productId: 3,
      productTitle: "Water Bottel",
      productImageLink: "https://m.media-amazon.com/images/I/11StrPAe1IL.jpg",
      productPrice: 50.0,
    },
    {
      productId: 4,
      productTitle: "Water Bottel",
      productImageLink: "https://m.media-amazon.com/images/I/11StrPAe1IL.jpg",
      productPrice: 50.0,
    },
    {
      productId: 5,
      productTitle: "Water Bottel",
      productImageLink: "https://m.media-amazon.com/images/I/11StrPAe1IL.jpg",
      productPrice: 50.0,
    },
    {
      productId: 6,
      productTitle: "Water Bottel",
      productImageLink: "https://m.media-amazon.com/images/I/11StrPAe1IL.jpg",
      productPrice: 50.0,
    },
  ];
  return (
    <div className={styles.CustomerDashboard}>
      <div className="customer-dashboard">
        <div className="customer-dashboard-products-list">
          <ProductCard products={products}></ProductCard>
        </div>
      </div>
    </div>
  );
};

CustomerDashboard.propTypes = {};

CustomerDashboard.defaultProps = {};

export default CustomerDashboard;
