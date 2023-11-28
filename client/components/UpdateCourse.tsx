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
            <label htmlFor={`update-name-${courseId}`}>Name:</label>
            <input
              id={`update-name-${courseId}`}
              type="text"
              name="name"
              value={updateCourseForm.name}
              onChange={handleInputChange}
            />
            <label htmlFor={`update-website-${courseId}`}>Website Name: </label>
            <input
              id={`update-website-${courseId}`}
              type="text"
              name="website"
              value={updateCourseForm.website}
              onChange={handleInputChange}
            />
            <label htmlFor={`update-host-${courseId}`}>Hosted By: </label>
            <input
              id={`update-host-${courseId}`}
              type="text"
              name="host"
              value={updateCourseForm.host}
              onChange={handleInputChange}
            />
            <label htmlFor={`update-field-${courseId}`}>Course Field:</label>
            <input
              id={`update-field-${courseId}`}
              type="text"
              name="field"
              value={updateCourseForm.field}
              onChange={handleInputChange}
            />
            <label htmlFor={`update-cost-${courseId}`}>Cost: </label>
            <input
              id={`update-cost-${courseId}`}
              type="number"
              name="cost"
              value={updateCourseForm.cost}
              onChange={handleInputChange}
            />
            <label htmlFor={`update-link-${courseId}`}>Link: </label>
            <input
              id={`update-link-${courseId}`}
              type="text"
              name="link"
              value={updateCourseForm.link}
              onChange={handleInputChange}
            />
            <fieldset id="update-fieldset">
              <legend></legend>
              <label htmlFor={`update-complete-${courseId}`}>
                Tick Box if you have finished this course:
                <input
                  type="checkbox"
                  name="complete"
                  id={`update-complete-${courseId}`}
                  checked={updateCourseForm.complete}
                  onChange={handleInputChange}
                />
              </label>
            </fieldset>
            <button type="submit" className="form-btn">
              Submit!
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
