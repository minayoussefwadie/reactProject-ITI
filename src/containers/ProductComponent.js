import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "bootstrap";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="col-md-4 col-lg-3 col-6">

   
<div class="card m-3 d-flex align-items-stretch" style={{width: "18rem" ,height:"30rem"}}>
  <div style={{width:"100%",height:"55%"}}>

  <img src={image} class="card-img-top  " style={{width:"100%",height:"100%"}} alt={title}/>
  </div>
  <div class="card-body d-flex flex-column ">
    <h7 class="card-title">{title}</h7>
    <p class="card-text">{price} $</p>
    <h6>{category}</h6>
    <div className="mt-auto align-self-end">

    <Link to={`/product/${id}`}>  <button href="#" class="btn btn-primary ">View Details</button></Link>
    </div>
  </div>
</div>
</div>


      /* <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div> */
    );
  });
  return <>
  <div className="container">
    <div className="row">

{renderList}

    </div>

  </div>
 
  </>;
};

export default ProductComponent;
