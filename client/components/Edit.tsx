import { useState } from "react"
import { editDetailsPatch, getArtById } from "../apis/apiClient"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from "react-router-dom"
import {useQuery} from '@tanstack/react-query'

export default function Edit() {
  const id = useParams().id
  
  const {data: artDetail, isLoading, isError} = useQuery({queryKey:['art',id], queryFn: ()=>getArtById(Number(id)),})
  console.log(artDetail.name)

  const [newName, setNewName]= useState(artDetail.name)
  const [newDescription, setNewDescription]= useState(artDetail.description)
  const [newMedium, setNewMedium]= useState(artDetail.medium)
  const [newOwner, setNewOwner]= useState(artDetail.owner)

  const queryClient = useQueryClient()
  let newDetails = {name: "", description: "", medium: "", owner: ""}


  const editDetailsMutation = useMutation({ 
    mutationFn: editDetailsPatch, 
    onSuccess: async()=>{
      queryClient.invalidateQueries({queryKey:['art',id]})
    }
  })

  // ()=>{editDetails(formData)}

  const editDetails = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    newDetails = {
      name: newName, description: newDescription, medium: newMedium, owner: newOwner
    }
    try{
      editDetailsMutation.mutate(newDetails)
    }catch(error){
      console.error('An error occurred during uploading:', error)
    }
  }

  const handleNewNameChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setNewName(event.target.value)
  }
  const handleNewDescriptionChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setNewDescription(event.target.value)
  }
  const handleNewMediumChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setNewMedium(event.target.value)
  }

  const handleNewOwnerChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setNewOwner(event.target.value)
  }  
  
  if (isError){
    return <p>hmm, not sure what happened</p>
  }
  if(!artDetail || isLoading){
    return <p>drafting artworks...</p>
  }

  return (<>
  <div className='addNew vflex'>
    <h2>Edit Artwork Details</h2>
    <form className= 'vflex'>
    <label className='hflex'>
        Edit Artwork Name:
        <input
          type="text"
          name= "newName"
          value= {newName}
          onChange={handleNewNameChange}
        />
      </label>
      <br />

      <label className='hflex'>
        Edit Description:
        <textarea
          name="newDescription"
          value={newDescription}
          onChange={handleNewDescriptionChange}
        />
      </label>
      <br />

      <label className='hflex'>
        Medium:
        <input
          type="text"
          name="newMedium"
          value={newMedium}
          onChange={handleNewMediumChange}
          // value={formData.newMedium}
          
        />
        
      </label>
      <br />
      
      <label className='hflex'>
        newOwner:
        <input
          type="text"
          name="newOwner"
          value={newOwner}
          onChange={handleNewOwnerChange}
        ></input>
      </label>
    <br/>
      <button type="submit" onClick={editDetails}>Save and Submit</button>
    </form>
    </div>
    </>
  )
}