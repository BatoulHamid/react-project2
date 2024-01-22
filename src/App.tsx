import Modal from "./components/UI/Modal"
import ProductCard from "./components/card"
import { productList,formInputList } from "./data"
import { useState} from 'react'
import Button from '../src/components/UI/button'
import Input from "./components/UI/input"


function App() {
  //**state */
  const [isOpen, setIsOpen] = useState(false);
  //**handler */
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
//**render */
const renderProductList=productList.map(product=><ProductCard key={product.id} product={product}/>)
const renderformInputList  = formInputList.map(input=>(
<div className="flex flex-col text-gray-700 mb-2 font-medium">
  <label htmlFor="" className="">{input.label}</label>
 <Input name={input.name} type={input.type} id={input.id}/>
</div>

))  



return (
    <main className="container">
          <Button classN="bg-red-700 hover:bg-green-700" onClick={openModal}>add</Button>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 p-3 m-3"> 
  
    {renderProductList}
<Modal  isOpen={isOpen} closeModal={closeModal} title="ADD NEW PRODUCT">
  <form className="space-y-3">
  {renderformInputList}
<div className="mt-4 flex items-center space-x-3 ">
                    <Button classN="bg-red-700 hover:bg-green-700 p-3 "
                    
                      onClick={closeModal}
                    >
                  submit
                    </Button>
                    <Button classN="bg-gray-700 hover:bg-green-700 p-3"
                      onClick={closeModal}
                    >
                    cancel
                    </Button>
                  </div>
  </form>

                  </Modal>
    </div>
   </main>
  )
}

export default App
