import { useState } from 'react'
import { deleteCharacter } from '../apis/characters'
import { updateCharacter } from '../apis/characters'
import { CharacterModel } from '../../models/Character'

function Character(props: CharacterModel) {
  const { id, name, alias, image } = props
  const [characterData, setCharacterData] = useState(props)
  const [editing, setEditing] = useState(false)

  function handleDelete() {
    deleteCharacter(id)
  }

  function toggleEdit() {
    setEditing(!editing)
  }

  function handleUpdate(event: { preventDefault: () => void }) {
    event.preventDefault()
    // Show error message if both name and alias are null
    if (characterData.name || characterData.alias) {
      updateCharacter(characterData)
    } else {
      alert("At least one of 'Alias' and 'Name' must be defined.")
    }
  }

  function handleChange(event: { target: HTMLInputElement }) {
    const el = event.target
    setCharacterData({ ...characterData, [el.name]: el.value || null })
  }

  return (
    <>
      {editing ? (
        <form className="character" onSubmit={handleUpdate}>
          <h2>
            <label htmlFor="alias">Alias:</label>
            <input
              onChange={handleChange}
              name="alias"
              value={characterData.alias || ''}
            />
          </h2>
          <h3>
            <label htmlFor="name">Name:</label>
            <input
              onChange={handleChange}
              name="name"
              value={characterData.name || ''}
            />
          </h3>
          <h4>
            <label htmlFor="image">Image URL:</label>
            <input
              onChange={handleChange}
              name="image"
              value={characterData.image || ''}
            />
          </h4>
          <div>
            <input type="submit" value="Save" />
            <button onClick={toggleEdit}>Cancel</button>
          </div>
        </form>
      ) : (
        <div className="character">
          <h2>{alias ? alias : name}</h2>
          {alias ? <h3>Name: {name}</h3> : ''}
          {image && <img src={image} alt={name || alias || 'character'} />}
          <div>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Character
