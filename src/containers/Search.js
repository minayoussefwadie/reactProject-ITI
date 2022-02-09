import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productsActions";
let Search = () => {

    let refBrand = useRef()
    let dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await axios
            .get(`http://localhost:3000/products?title=${refBrand.current.value}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };
    return (
        <div className="text-center row " style={{ width: "50%", margin: "auto" }}>

            <div className="col-8">

                <div className="input-group ">

                    <input type="text" className="form-control  " placeholder="Search By Name" ref={refBrand} aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
            </div>
            <div className="col-4">
                <input type="button" value="Search" className="btn btn-outline-primary w-100"

                    onClick={() => fetchProducts()}
                />
            </div>

        </div>
    )
}


export default Search;
