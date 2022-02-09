import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description,quantity,status } = product;
  let [qty,Setqty]=useState(0)
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`http://localhost:3000/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className=" container  text-center" style={{marginTop:"50px"}}>
    {Object.keys(product).length === 0 ? (
      <div>...Loading</div>
    ) : (

<div class="row shadowDiv m-auto   " >
<div className="row d-flex justify-content-between">
  <div className="col-5 ">
  <img src={image} 
       class="img-fluid" alt=""/>
  </div>
  <div className="col-3 ">
      <h2 >{title}</h2>
      <hr/>
      <span>Description:{description}</span>
      <hr/>
      <span>Price: ${price}</span>
  </div> 
  <div className="col-3">
  <ul class="list-group">
  <li class="list-group-item">Price:${price}</li>
  <li class="list-group-item">status:{status}</li>
  <li class="list-group-item">
    qty:
  <select className="custom-select" value={qty} onChange={(e)=>{Setqty(e.target.value)}}>
      {console.log([...Array(quantity).keys()],"here")}
    {
      [...Array(quantity).keys()].map((x) => {
         return(
          <option key={x + 1} value={x + 1} >
               {x + 1}
        </option>
          )
      })
      }
  </select>
    </li>
    <li class="list-group-item">
      <button className="btn btn-primary" onClick={()=>{}}>add to cart</button>
    </li>


  </ul>
  </div>


</div>
     <div class="col-md-7 col-12">
       <img src={image} 
       class="img-fluid w-50" alt=""/>
     </div>
     <div class="col-md-5 col-12" style={{borderLeft:"1px solid black"}}>
         <h1> {title}</h1>
         <h3>Price: {price} $</h3>
         <h3> category: {category}</h3>
        
         <p class="m-3">{description}</p>
         <button className="btn btn-primary"> Add To Cart</button>
            
 </div>
 </div>

    
    )}
  </div>

    // <div className="ui grid customContainer">
    //   {Object.keys(product).length === 0 ? (
    //     <div>...Loading</div>
    //   ) : (
    //     <div className="ui placeholder segment">
    //       <div className="ui two column stackable center aligned grid">
    //         <div className="ui vertical divider">AND</div>
    //         <div className="middle aligned row">
    //           <div className="column lp">
    //             <img className="ui fluid image" src={image} />
    //           </div>
    //           <div className="column rp">
    //             <h1>{title}</h1>
    //             <h2>
    //               <a className="ui teal tag label">${price}</a>
    //             </h2>
    //             <h3 className="ui brown block header">{category}</h3>
    //             <p>{description}</p>
    //             <div className="ui vertical animated button" tabIndex="0">
    //               <div className="hidden content">
    //                 <i className="shop icon"></i>
    //               </div>
    //               <div className="visible content">Add to Cart</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>


  );
};

export default ProductDetails;
