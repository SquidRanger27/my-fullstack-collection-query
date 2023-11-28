// @vitest-environment jsdom
//AddCheese-mock.test.tsx

import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import './setup.ts'
import * as api from '../../api/api-cheeses.ts'
import AddCheese from '../AddCheese.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

//isolate out system under test (SUT)

vi.mock('../apiClient.ts')

const mockAddedCheeseData = {
  name: 'Test name',
  description: 'Test description',
  comment: 'Test comment',
  rating: 10,
}

describe('<AddCheese />', () => {
  it('adds a cheese on form submission', async () => {
    //ARRANGE
    const queryClient = new QueryClient()
    vi.mocked(api.addCheeseApi).mockImplementation(async () => {
      console.log('addCheeseApi is called')
      return mockAddedCheeseData
    })

    //ACT
    render(
      <QueryClientProvider client={queryClient}>
        <AddCheese />
      </QueryClientProvider>
    )
    const nameInput = screen.getByLabelText('Name:')
    const descriptionInput = screen.getByLabelText('Description:')
    const commentInput = screen.getByLabelText('Comment:')
    const ratingInput = screen.getByLabelText(
      'Rating out of a possible 10 Goldblums:'
    )
    const button = screen.getByRole('button')

    fireEvent.change(nameInput, { target: { value: 'Test name' } })
    fireEvent.change(descriptionInput, {
      target: { value: 'Test description' },
    })
    fireEvent.change(commentInput, { target: { value: 'Test comment' } })
    fireEvent.change(ratingInput, {
      target: {
        value: mockAddedCheeseData.rating,
      },
    })
    console.log('Component rendered')
    fireEvent.click(button)

    //ASSERT
    expect(api.addCheeseApi).toHaveBeenCalledWith(mockAddedCheeseData)
  })
})
