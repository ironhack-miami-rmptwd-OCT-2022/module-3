import React from 'react'
import "../App.css";


function ProductRow({theProduct}){

    let classString = "productRow";
    if(!theProduct.inStock) classString += " out-of-stock"

  



    return(
    <div className={classString}>
        <span className='productName'>{theProduct.name}</span>
        <span>{theProduct.price}</span>
    </div>
    )



}


export default ProductRow;