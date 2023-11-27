import React, { useState } from 'react'
import { NewCourse } from '../../models/courses'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { addCoursesApi } from '../apis/apiClient'

function AddCourse() {
  const emptyCourse: NewCourse = {
    name: '',
    website: '',
    host: '',
    field: '',
    cost: 0,
    link: '',
    complete: false,
  }
  const queryClient = useQueryClient()
  const [formData, setFormData] = useState(emptyCourse)

  const addCourseMutation = useMutation({
    mutationFn: addCoursesApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['courses'])
      setFormData(emptyCourse)
    },
    onError: (error) => {
      console.error('Mutation Error:', error)
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      addCourseMutation.mutate(formData)
    } catch (error: any) {
      console.log(error.message)
    }
  }
  const handleInputChange = async (e: any) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  return (
    <>
      <div className="add-course">
        <h2 className="form-title">Add a Course</h2>
        <form action="/" className="form" onSubmit={handleSubmit} method="POST">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label htmlFor="website">Website Name: </label>
          <input
            id="website"
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
          />
          <label htmlFor="host">Hosted By: </label>
          <input
            id="host"
            type="text"
            name="host"
            value={formData.host}
            onChange={handleInputChange}
          />
          <label htmlFor="field">Course Field:</label>
          <input
            id="field"
            type="text"
            name="field"
            value={formData.field}
            onChange={handleInputChange}
          />
          <label htmlFor="cost">Cost: </label>
          <input
            id="cost"
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleInputChange}
          />
          <label htmlFor="link">Link: </label>
          <input
            id="link"
            type="text"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
          />
          <label htmlFor="complete">Have you finished this course?: </label>
          <input
            type="checkbox"
            name="complete"
            id="complete"
            checked={formData.complete}
            onChange={handleInputChange}
          />
          <button type="submit" className="form-btn">
            Submit!
          </button>
        </form>
      </div>
    </>
  )
}

export default AddCourse
