import React, { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getAllComics, getComicById, updateComic } from '../../server/db/db'
import {
  addComicByName,
  deleteComicById,
  updateComicById,
} from '../apis/comics'

const Comics: React.FC = () => {
  const {
    data: comics,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['comics'],
    queryFn: getAllComics,
  })

  const [newComicName, setNewComicname] = useState('')
  const [updateData, setUpdateData] = useState<{
    id: number
    name?: string
    issue_number?: string
  } | null>(null)

  const { mutate } = useMutation(addComicByName, {
    onSuccess: () => {
      refetch()
      setNewComicname('')
    },
  })

  const deleteComicMutation = useMutation(deleteComicById)

  const handleAddComic = () => {
    if (newComicName.trim() !== '') {
      mutate(newComicName)
    }
  }

  const handleRemoveComic = (id: number) => {
    deleteComicMutation.mutate(id, {
      onSuccess: () => {
        refetch()
      },
    })
  }

  const handleUpdateComic = (
    id: number,
    name?: string,
    issue_number?: string
  ) => {
    setUpdateData({ id, name, issue_number })
  }

  const handleApplyUpdate = () => {
    if (updateData) {
      const { id, name, issue_number } = updateData

      updateComicById(id, { name, issue_number })
        .then(() => {
          refetch()
          setUpdateData(null)
        })
        .catch((error) => {
          console.error('it broked: ', error)
        })
    }
  }

  if (isError) {
    return <>Something went wrong!</>
  }

  if (!Comics || isLoading) {
    return <>Loading...</>
  }

  const comicItems: JSX.Element[] = []

  for (let i = 0; i < Comics.length; i++) {
    const comic = comics[i]
    comicItems.push(
      <li key={comic.id}>
        <strong>Title:</strong> {comic.name}, <strong>Issue number:</strong>{' '}
        {comic.issue_number}
        <button onClick={() => handleRemoveComic(comic.id)}>
          Remove comic
        </button>
        <button onClick={() => handleUpdateComic(comic.id, comic.name)}>
          Update comic
        </button>
      </li>
    )
  }
  return (
    <div>
      <h2>Comics</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleAddComic()
        }}
      >
        <label htmlFor="comicName">Comic Title:</label>
        <input
          type="text"
          id="comicName"
          name="comicName"
          placeholder="Enter comic title!"
          value={newComicName}
          onChange={(e) => setNewComicname(e.target.value)}
        />
        <button type="submit">Add Comic!</button>
      </form>
      <ul>{comicItems}</ul>

      {updateData && (
        <div>
          <h3>Update Comic</h3>
          <label htmlFor="updateTitle">
            Title:
            <input
              type="text"
              id="updateTitle"
              name="updateTitle"
              value={updateData.name || ''}
              onChange={(e) =>
                setUpdateData({ ...updateData, name: e.target.value })
              }
            />
          </label>
          <label htmlFor="updateIssueNumber">
            {' '}
            Update Issue Number:
            <input
              type="text"
              id="updateIssueNumber"
              name="uupdateIssueNumber"
              value={updateData.issue_number || ''}
              onChange={(e) =>
                setUpdateData({ ...updateData, issue_number: e.target.value })
              }
            />
          </label>
          <button onClick={handleApplyUpdate}>Apply update!</button>
        </div>
      )}
    </div>
  )
}

export default Comics
