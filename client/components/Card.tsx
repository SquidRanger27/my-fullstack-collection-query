import { useMutation } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"
import * as api from '../apis/apiClient'
export function Card(info){
  const proceedTextArray = ["choose","proceed","done","delete"]
  const proceedText = proceedTextArray[info.status]
  console.log(info.status)
  console.log("yow",info.id)

  const queryClient = useQueryClient()

  const deleteStatusMutation = useMutation({
    mutationFn:api.deleteTodo,
    onSuccess:async()=>{
      queryClient.invalidateQueries(['todo'])

    }
  })

  const editStatusMutation = useMutation({
    mutationFn:api.updateStatus,
    onSuccess:async()=>{
      queryClient.invalidateQueries(['todo'])

    }
  })
  
  function handleProceed(){
    if(info.status==3){
      handleDelete()
      return
    }
    editStatusMutation.mutate({
      id:info.id,
      status:info.status+1
    })

  }
  function handleDelete(){
    deleteStatusMutation.mutate({id:info.id})
  }
  return(
    <div className = "cardContainer">
      {info.description}
      
      <button onClick = {handleProceed}>{proceedText}</button>

      {info.status==0?
      <div className = "statusButton">
      <button>edit</button><button onClick={handleDelete}>delete</button>
      </div>:undefined}


    </div>
  )

 
}