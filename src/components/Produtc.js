import React from "react";
import { NavLink } from "react-router-dom";

const Product=(currentElements)=>{

    const {id, name, image, price, catagory} = currentElements;
    return<NavLink to={`/SingleProduct/${id}`}>

        <div className="card">
            <figure>
                <img src={image} alt="product image"/>
                <figcaption className="caption">{name}</figcaption>
            </figure>

            <div className="card-data">
                <div className="card-data-flex">
                    <h3>{name}</h3>
                    <p className="card-data--price">{Intl.NumberFormat(
                        "BDT", {style: "currency",
                                currency: "BDT",
                                maximumFractionDigits: 2      
                        }
                    ).format(price/100)}
                    </p>
                </div>
            </div>

        </div>
    
    </NavLink>    
}

export default Product;