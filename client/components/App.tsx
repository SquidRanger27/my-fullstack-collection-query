import { getAllProductsAPI } from "../apis/apiClient"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import AdminForm from "./AdminForm"
function App() {
  const {data:products,isLoading,error} = useQuery({queryKey:['products'],queryFn:getAllProductsAPI})
  if (error) {
    return <p>This is an Error</p>
  }
  if (!products || isLoading) {
    return <p>Internal Server Error</p>
  }
  return (
    <>
      <header className="header">
        <h1>My Shop</h1>
      </header>
      <section className="main">{products.map((data)=>{
        return(
        <div className="product_container"key = {data.id}>

          <div className = "product_image">
            <img src={data.product_image} alt="" />
          </div>

          <div className = "product_details">
            <p className = "priceFont">{data.product_price}</p>
            <span className = "productNameFont">{data.product_name}</span>
          </div>
         
        </div>
        )
      })}</section>
    </>
  )
}

export default App
