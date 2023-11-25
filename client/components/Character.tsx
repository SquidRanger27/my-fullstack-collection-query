import { useState } from 'react'
import { deleteCharacter, updateCharacter } from '../apis/characters'
import { CharacterModel } from '../../models/Character'
import { useMutation, useQueryClient } from '@tanstack/react-query'

function Character(props: CharacterModel) {
  const { id, name, alias, image } = props
  const [characterData, setCharacterData] = useState(props)
  const [editing, setEditing] = useState(false)
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: deleteCharacter,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['characters'],
      })
    },
  })

  const updateMutation = useMutation({
    mutationFn: updateCharacter,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['characters'],
      })
    },
  })

  function handleDelete() {
    deleteMutation.mutate(id)
  }

  function toggleEdit() {
    setEditing(!editing)
  }

  function handleUpdate(event: { preventDefault: () => void }) {
    event.preventDefault()
    // Show error message if both name and alias are null
    if (characterData.name || characterData.alias) {
      updateMutation.mutate(characterData)
      setEditing(false)
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
          {alias && name ? <h3>Name: {name}</h3> : ''}
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
