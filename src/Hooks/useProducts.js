import {useEffect, useState } from "react"

// data fetch hook
const useProducts = () =>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://rocky-crag-07319.herokuapp.com/bikes')
        .then(res=> res.json())
        .then(data=> setProducts(data));
    },[]);
   
    return [products, setProducts];
}
export default useProducts;