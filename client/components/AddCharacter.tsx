import { useState } from 'react'
import { addCharacter } from '../apis/characters'
import { useMutation, useQueryClient } from '@tanstack/react-query'

function AddCharacter() {
  const [characterData, setCharacterData] = useState({
    alias: '',
    name: '',
    image: '',
  })
  const [adding, setAdding] = useState(false)
  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: addCharacter,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['characters'],
      })
    },
  })

  function toggleAdd() {
    setAdding(!adding)
  }

  function handleAdd(event: { preventDefault: () => void }) {
    event.preventDefault()
    // Show error message if both name and alias are null
    if (characterData.name || characterData.alias) {
      addMutation.mutate(characterData)
    } else {
      alert("At least one of 'Alias' and 'Name' must be defined.")
    }
  }

  function handleChange(event: { target: HTMLInputElement }) {
    const el = event.target
    setCharacterData({ ...characterData, [el.name]: el.value || null })
  }

  if (adding) {
    return (
      <>
        <form className="character" onSubmit={handleAdd}>
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
            <input type="submit" value="Add Character" />
            <button onClick={toggleAdd}>Cancel</button>
          </div>
        </form>
      </>
    )
  }
  return (
    <>
      <div className="character add">
        <button onClick={toggleAdd}>+</button>
      </div>
    </>
  )
}

export default AddCharacter
