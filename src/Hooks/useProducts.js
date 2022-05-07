import {useEffect, useState } from "react"

// data fetch hook
const useProducts = () =>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bikes')
        .then(res=> res.json())
        .then(data=> setProducts(data));
    },[]);
   
    return [products, setProducts];
}
export default useProducts;