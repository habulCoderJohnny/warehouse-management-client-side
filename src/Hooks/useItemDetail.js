import { useEffect, useState } from "react";

const useItemDetail = itemId =>{
    const [item, setItem] = useState({});
    useEffect(()=>{
        const url = `https://rocky-crag-07319.herokuapp.com/bikes/${itemId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data=>setItem(data))
    },[itemId]);
    return [item];
}
export default useItemDetail;