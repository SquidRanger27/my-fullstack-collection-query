import React, { useState } from 'react'
import { updateCoursesApi } from '../apis/apiClient'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { NewCourse, Courses } from '../../models/courses'

interface Props {
  courseId: number
}

export default function UpdateCourse({ courseId }: Props) {
  const emptyCourse: Courses = {
    id: 0,
    name: '',
    website: '',
    host: '',
    field: '',
    cost: 0,
    link: '',
    complete: false,
  }
  const [edit, setEdit] = useState(false)
  const [updateCourseForm, setUpdateCourseForm] = useState(emptyCourse)
  const queryClient = useQueryClient()

  const updateCourseMutation = useMutation({
    mutationFn: () => updateCoursesApi(courseId, updateCourseForm),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] })
    },
  })

  // const fetchCourseData = async () => {}

  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      updateCourseMutation.mutate()
      setEdit(false)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setUpdateCourseForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleToggleForm = () => {
    setEdit(!edit)
    if (!edit) {
      setUpdateCourseForm({
        ...updateCourseForm,
        ...emptyCourse,
      })
    }
  }

  return (
    <div>
      <button onClick={handleToggleForm}>
        {edit ? 'Cancel' : 'Update Course!'}
      </button>
      {edit && (
        <div className="add-course">
          <h3 className="form-title">Update Course</h3>
          <form
            action="/"
            className="form"
            onSubmit={handleEditSubmit}
            method="POST"
          >
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={updateCourseForm.name}
              onChange={handleInputChange}
            />
            <label htmlFor="website">Website Name: </label>
            <input
              id="website"
              type="text"
              name="website"
              value={updateCourseForm.website}
              onChange={handleInputChange}
            />
            <label htmlFor="host">Hosted By: </label>
            <input
              id="host"
              type="text"
              name="host"
              value={updateCourseForm.host}
              onChange={handleInputChange}
            />
            <label htmlFor="field">Course Field:</label>
            <input
              id="field"
              type="text"
              name="field"
              value={updateCourseForm.field}
              onChange={handleInputChange}
            />
            <label htmlFor="cost">Cost: </label>
            <input
              id="cost"
              type="number"
              name="cost"
              value={updateCourseForm.cost}
              onChange={handleInputChange}
            />
            <label htmlFor="link">Link: </label>
            <input
              id="link"
              type="text"
              name="link"
              value={updateCourseForm.link}
              onChange={handleInputChange}
            />
            <label htmlFor="complete">
              Tick Box if you have finished this course:
              <input
                type="checkbox"
                name="complete"
                id="complete"
                checked={updateCourseForm.complete}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit" className="form-btn">
              Submit!
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
