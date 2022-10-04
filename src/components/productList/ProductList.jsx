import React from "react";
import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data";

function ProductList() {
  return (
    <div className="productList">
      <div className="productListTexts">
        <h1 className="prductListTitle">Create & Inspire</h1>
        <p className="productListDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora
          molestiae non possimus laudantium vero architecto unde, earum
          voluptatibus repellat aliquid optio quidem. Voluptas sed, ipsa nostrum
          quos tempore odit?
        </p>
      </div>
      <div className="productListList">
        {products.map((item) => (
          <Product img={item.img} key={item.id} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
