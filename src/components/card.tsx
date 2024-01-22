import { IProduct } from "../interfaces";
import ProductImage from "./ProductImage"
import Button from "./UI/button"
import {descSlice} from "../utils/function.ts"


interface  Iprops  {
 product  : IProduct;
}
function ProductCard({product}:Iprops) {


    return (
      
     <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
        <ProductImage ImageUrl={product.imgURL}
        Imagealt="product image" ImageClass="rounded-md"
        
        />
      
       <h3 className="text-lg font-semibold">{product.title}</h3>
       <p className="text-xs text-gray-500 break-words">{descSlice(product.description,30)}</p>
        <div className="flex my-3 space-x-3">
            <span className="w-5 h-5 rounded-full bg-black cursor-pointer"  ></span>
            <span className="w-5 h-5 rounded-full bg-red-950 cursor-pointer"></span>
            <span className="w-5 h-5 rounded-full bg-gray-800 cursor-pointer"></span>
        </div>
        <div className="flex items-center justify-between my-3 ">
            <p>4000$</p>
            <ProductImage ImageUrl={product.imgURL}
        Imagealt={product.category.name} ImageClass="rounded-full w-10 h-10"
        
        />
    

        </div>
<div className="flex items-center justify-between space-x-3">
    <Button classN="bg-indigo-700 " width="w-full"
    onClick={()=>{console.log('clicked');}}>Edit</Button>
    <Button classN="bg-red-700">Delete</Button>
</div>
       
     </div>
    
    )
  }
  
  export default ProductCard