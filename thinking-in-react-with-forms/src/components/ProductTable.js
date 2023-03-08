import React from 'react'
import "../App.css";
import ProductRow from './ProductRow';


function ProductTable({products}){

    const productRows = products.map((eachProduct)=>{
        return(
            <ProductRow key={eachProduct.name} theProduct={eachProduct} />
        )
    });




    return (
        <div className='productTable'>
           {productRows}
        </div>
    )


}


export default ProductTable;