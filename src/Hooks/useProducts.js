import {useEffect, useState } from "react"

// data fetch hook
const useProducts = () =>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then(res=> res.json())
        .then(data=> setProducts(data));
    },[]);
   
    return [products, setProducts];
}
export default useProducts;