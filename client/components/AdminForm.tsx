import { useState } from "react";

function AdminForm(){
  const [selectedOption, setSelectedOption] = useState('');
  const [text,setText] = useState()
  function handleSelectChange(e){

    setSelectedOption(e.target.value)
  }
  function handleClick(e){
e.preventDefault()
    console.log("piutang ina mo")
  }
  return(
    <form action="/admin" method="post" encType="multipart/form-data">
      <table>
        <tr>
          <td><label htmlFor="product_name">Product Name:</label></td>
          <td><input type="text" id = "product_name" /></td>
        </tr>
        <tr>
          <td><label htmlFor="product_price">Price: </label></td>
          <td><input type="text" id = "product_price" /></td>
        </tr>
        <tr>
          <td><label htmlFor="product_image">Upload Image</label></td>
          <td><input type="file" id = "product_image" name = "product_image" accept="image/*"  /></td>
        </tr>
        <tr>
          <td><label htmlFor="dropdown">Product Type:</label></td>
          <td>
            <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select...</option>
            <option value="Soft Drink"onChange={handleSelectChange}>Soft Drinks</option>
            <option value="Energy_Drink">Energy Drinks</option>
            
            </select>
         </td>
        </tr>
      </table>
      <button type="submit" onClick = {handleClick}>Add</button>
    </form>
    
  )
}
export default AdminForm