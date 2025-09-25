import { useEffect } from "react";

function Products() {
    useEffect(()=>{
        document.title = "Products";
    },[]);

  return (
    <div>Products</div>
  )
}

export default Products