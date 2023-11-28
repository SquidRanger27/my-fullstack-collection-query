import Tasks from './Kanban'

import { useQueryClient, QueryClientProvider } from '@tanstack/react-query'

import ClearLocalStorage from './ClearLocalStorage'

function App() {
  const queryClient = useQueryClient()
  queryClient.invalidateQueries({ queryKey: ['tasks'] })
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <header className="header">
          <h1>Kanban 4 U</h1>
          {/* <ClearLocalStorage /> */}
          {/* <NewTaskForm /> */}

          <Tasks />
        </header>
      </QueryClientProvider>
    </>
  )
}

export default App
