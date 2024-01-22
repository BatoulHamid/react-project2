import ProductCard from "./components/card"
import { productList } from "./data"



function App() {
//**render */
const renderProductList=productList.map(product=><ProductCard key={product.id} product={product}/>)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 p-3 m-3"> 
    {renderProductList}

    </div>
   
  )
}

export default App
