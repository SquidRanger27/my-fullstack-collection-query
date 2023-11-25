import { useState } from "react"
import axios from 'axios'
import { uploadArt } from "../apis/apiClient"

export default function AddForm() {
  const [file, setFile] = useState()
  
  const uploadFile = () =>{
    const formData = new FormData()
    formData.append('file', file)
    uploadArt()
    // axios.post('http://localhost:3000/upload',)
    // .then(res => {})
    // .catch(error => console.log(error))
  }

  const submit = async event => {
    event.preventDefault()

    // Send the file and description to the server
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
          // onChange=
        />
      </label>
      <br />

      <label className='hflex'>
        Description:
        <textarea
          name="description"
          // value={formData.description}
          // onChange={handleChange}
        />
      </label>
      <br />

      <label className='hflex'>
        Medium:
        <input
          type="text"
          name="medium"
          // value={formData.medium}
          
        />
        
      </label>
      <br />

      <label className='hflex'>
        Image URL:
        <input
          type="file"
          name="imageUrl"
          // value={formData.imageUrl}
          // onChange={handleChange}
          onChange={(e)=> setFile(e.target.files[0])}
        />
        <button type="button" onClick={uploadFile}>Upload</button>
      </label>
      <br />

      <label className='hflex'>
        Owner: 
        <input
          type="text"
          name="owner"
          // value={formData.owner}
          // onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  )
}