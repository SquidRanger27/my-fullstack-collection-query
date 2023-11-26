import { useState } from "react"
import { uploadArt } from "../apis/apiClient"

export default function OneImage() {
  const [file, setFile] = useState()
  const [name, setName]= useState("")
  const [description, setDescription]= useState("")
  const [medium, setMedium]= useState("")
  const [owner, setOwner]= useState("")

  const uploadFile = async event => {
    event.preventDefault()
    const inputObject = {
      name,
      description,
      medium,
      imageUrl: '',
      owner
    }
    const formData = new FormData()
    formData.append('file', file)
    formData.append("name", name);
    formData.append("description", description);
    formData.append("medium", medium);
    formData.append("owner", owner);

    await uploadArt(formData)
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setName(event.target.value)
  }
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setDescription(event.target.value)
  }
  const handleMediumChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setMedium(event.target.value)
  }
  const handleFileChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setFile(event.target.files[0])
  }
  const handleOwnerChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setOwner(event.target.value)
  }

  return (<>
  <div className='addNew vflex'>
    <h2>Add a new Artwork</h2>
    <form className= 'vflex'>
    <label className='hflex'>
        Artwork Name:
        <input
          type="text"
          name="name"
          // value=
          onChange={handleNameChange}
        />
      </label>
      <br />

      <label className='hflex'>
        Description:
        <textarea
          name="description"
          // value={formData.description}
          onChange={handleDescriptionChange}
        />
      </label>
      <br />

      <label className='hflex'>
        Medium:
        <input
          type="text"
          name="medium"
          onChange={handleMediumChange}
          // value={formData.medium}
          
        />
        
      </label>
      <br />

      <label className='hflex'>
        Image Upload:
        <input
          type="file"
          name='file'
          onChange={handleFileChange}
        />
      </label>
      <br />
      
      <label className='hflex'>
        Owner:
        <input
          type="text"
          name="owner"
          onChange={handleOwnerChange}
        ></input>
      </label>
    <br/>
      <button type="submit" onClick={uploadFile}>Upload</button>
    </form>
    </div>
    </>
  )
}