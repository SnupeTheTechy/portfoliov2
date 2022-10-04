import React from "react";
import "./product.css";

function Product(props) {
  return (
    <div className="product">
      <div className="browser">
        <div className="productCircle"></div>
        <div className="productCircle"></div>
        <div className="productCircle"></div>
      </div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.img} alt="" className="productImage" />
      </a>
    </div>
  );
}

export default Product;
