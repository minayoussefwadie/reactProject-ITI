import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import Search from "./Search";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:3000/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
      console.log(response.data,"minaaaa")
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="container" style={{marginTop:"50px"}}>
      <div className="row">


         <Search/> 
      </div>
      <div className="row">

      <ProductComponent />
      </div>
  
    </div>
  );
};

export default ProductPage;
