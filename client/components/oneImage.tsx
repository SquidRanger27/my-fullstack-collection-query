import { useState } from "react"
import axios from 'axios'
import { uploadArt } from "../apis/apiClient"

export default function OneImage() {
  const [file, setFile] = useState()

  const uploadFile = async event => {
    event.preventDefault()
    const formData = new FormData()
    
    formData.append('file', file)
    console.log(formData)
    uploadArt()
  }

  return (<>
  <div className='addNew vflex'>
    <h2>Add a new Artwork</h2>
    <form className= 'vflex'>
      <label className='hflex'>
        Image URL:
        <input
          type="file"
          name="imageUrl"
          onChange={(e)=> setFile(e.target.files[0])}
        />
      </label>
      <button type="submit" onClick={uploadFile}>Upload</button>
    </form>
    </div>
    </>
  )
}