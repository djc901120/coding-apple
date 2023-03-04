
import React from 'react';
import ItemDescription from "./ItemDescription"

function Product( {name, description, price} ) {
    return (
        <div>
            {/* <h1>{props.name}</h1>
            <h2>{props.description}</h2>
            <h3>{props.price}</h3> */}

            <ItemDescription name={name} description={description}/>
            <h3>${price}</h3>
        </div>
    )
}

export default Product;
