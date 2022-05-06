import { useEffect, useState } from "react";

const useItemDetail = itemId =>{
    const [item, setItem] = useState({});
    useEffect(()=>{
        const url = `product.json/delivery/${itemId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=>console.log(data))
    },[itemId]);
    return [item];
}
export default useItemDetail;