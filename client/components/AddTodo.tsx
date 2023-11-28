import { useState } from "react";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../apis/apiClient";
import { useNavigate } from "react-router-dom";
function AddTodo(){
  const [selectedOption,setSelectedOption] = useState('')
  const [text,setText] = useState({
    description:'',
    type:'',
    status:0
  })
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const addTodoMutation = useMutation({
    mutationFn:addTodo,
    onSuccess:async()=>{
      queryClient.invalidateQueries(['todo'])
      navigate('/')
    }
  })
  function handleSelectChange(e){
    
    const key = e.target.id
    const stateObj = {
      ...text,
      [key]:e.target.value
    }
    console.log(stateObj)
    setSelectedOption(e.target.value)
    setText(stateObj)
  }
  function handleClick(e){
    e.preventDefault()
    addTodoMutation.mutate(text)
    console.log(selectedOption)
  }
return (
  
  <form className = "addTodoForm" action="/" method = "post">
    <table className = "tableForm">
      <tr>
        <td><label htmlFor="description">Description:</label></td>
        <td> <input type="text" id = "description" name = "description" value = {text.description} onChange={handleSelectChange}/></td>
      </tr>

      <tr>
        <td> <label htmlFor="type">Type:</label></td>
        <td>
          <select id="type" value = {selectedOption} onChange = {handleSelectChange}>
            <option value="">Select Type</option>
            <option value="mvp">MVP</option>
            <option value="stretch">Stretch</option>
          </select>
        </td>
      </tr>
    </table>
    
   
   
    
    <button onClick = {handleClick}>Add todo</button>
    <button onClick = {function cancel(e){
      e.preventDefault()
      navigate('/')
    }}>Cancel</button>
  </form>
)
}
export default AddTodo