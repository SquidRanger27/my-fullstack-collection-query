import { useState } from "react";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { addProducts } from "../apis/apiClient";

function AdminForm(){
  const [selectedOption, setSelectedOption] = useState('');
  const [text,setText] = useState({
    product_name:'',
    product_price:'',
    // product_image:'',
    product_type:''
  })
  const [fileData,setFileData] = useState({product_image:''})
  const queryClient = useQueryClient()
  const addProductMutation = useMutation({
    mutationFn:addProducts,
    onSuccess:async()=>{
      queryClient.invalidateQueries(['product'])
    }
  })

  function handleSelectChange(e){
    const key = e.target.id
    const stateObj = {
      ...text,
      [key]:e.target.value
    }
   
  if (e.target.files) {
    const fileObj = {
      ...fileData,
      [key]: e.target.files[0] // Assuming you want to handle only one file
    };
    setFileData(fileObj);
  }
    setSelectedOption(e.target.value)
    setText(stateObj)
    console.log("this is stateObj",stateObj)
    console.log("this is fileData",fileData)
  }

  function handleClick(e){
    e.preventDefault()
    const formData = new FormData();
  formData.append('product_name', text.product_name);
  formData.append('product_price', text.product_price);
  formData.append('product_image', fileData.product_image); // Assuming fileData is an object with the property product_image
  formData.append('product_type', text.product_type);
    // console.log("this is fileData when button pressed",fileData)
    console.log("eto ay text",text)
    addProductMutation.mutate(formData)
    console.log("pressed")
  }

  return(
    <form action="/admin" method="post" encType="multipart/form-data">
      <table>
        <tr>
          <td><label htmlFor="product_name">Product Name:</label></td>
          <td><input type="text" id = "product_name" value = {text.product_name} onChange={handleSelectChange} /></td>
        </tr>
        <tr>
          <td><label htmlFor="product_price">Price: </label></td>
          <td><input type="text" id = "product_price" value = {text.product_price} onChange={handleSelectChange}/></td>
        </tr>
        <tr>
          <td><label htmlFor="product_image">Upload Image</label></td>
          <td><input type="file" id = "product_image" name = "product_image" accept="image/*" onChange={handleSelectChange}/></td>
        </tr>
        <tr>
          <td><label htmlFor="product_type">Product Type:</label></td>
          <td>
            <select id="product_type" value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select...</option>
            <option value="Soft Drink">Soft Drinks</option>
            <option value="Energy Drink">Energy Drinks</option>
            
            </select>
         </td>
        </tr>
      </table>
      <button type="submit" onClick = {handleClick}>Add</button>
    </form>
    
  )
}
export default AdminForm