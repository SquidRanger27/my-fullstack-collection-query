import { useState } from "react"

export default function AddForm() {
  

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
          // onChange={handleChange}
        />
      </label>
      <br />

      <label className='hflex'>
        Image URL:
        <input
          type="text"
          name="imageUrl"
          // value={formData.imageUrl}
          // onChange={handleChange}
        />
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