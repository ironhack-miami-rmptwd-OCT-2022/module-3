import React, {useState} from 'react'
import "../App.css";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import bunchaProducts from "../data.json";



function ProductsPage(){
    const [products, setProducts] = useState(bunchaProducts);

    // const updateSearch = (e, searchBy) => {
    //     let productsCopy = [...bunchaProducts];


    //     let filteredProducts = productsCopy.filter((eachProduct)=>{
    //         if(searchBy === "search") return eachProduct.name.toLowerCase().includes(e.target.value.toLowerCase());
    //         if(searchBy === "stock") return e.target.checked? eachProduct.inStock : eachProduct;
    //     });


        // setProducts(filteredProducts);
    // }


    const submitForm = (searchTerm, maxPrice, inStockOnly) =>{
            let productsCopy = [...bunchaProducts];

       let filteredProducts = productsCopy.filter((eachProduct)=>{
            if(searchTerm.length) return eachProduct.name.toLowerCase().includes(searchTerm.toLowerCase()); 
            else return eachProduct;   
        });  
        let filteredForPrice = filteredProducts.filter((eachProduct)=>{
            if(maxPrice > 0) return eachProduct.price < maxPrice;
            else return eachProduct;
        });
        let stockFiltered = filteredForPrice.filter((eachProduct)=>{  
            if(inStockOnly) return eachProduct.inStock;
            else return eachProduct;
        });

        console.log(filteredProducts, filteredForPrice, stockFiltered);

            
            setProducts(stockFiltered);

    }

  
      
     
        
    


    

    return(
        <div className='productPage'>
            <SearchBar submitForm={submitForm} />
            <ProductTable products={products} />
        </div>
    )



}


export default ProductsPage;