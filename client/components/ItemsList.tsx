import { Item } from '../../models/items'
import { getAllItems } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'

export default function ItemsList() {
  const {
    data: items,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['items'], queryFn: getAllItems })
  // console.log(getAllItems())
  console.log(items)
  // items currently coming back as null
  // in aplClient changed request.get('/') to request.get('/api/v1/') now coming back as undefined
  // Promise currently getting rejected
  // ..... Hadn't set up the following in my server.ts file ;; server.use('/api/v1/', itemsRoute)
  // Data now displaying in insomnia and rendering on home page

  if (isError) {
    return <p>Im currently an error...</p>
  }

  if (!items || isLoading) {
    return <p>Im trying to load the data...</p>
  }

  return (
    <>
      <div className="items-list">
        <h1 className="items-header">Current Items Lent: </h1>
        <ul>
          {items.map((item: Item) => {
            // console.log(item)
            return (
              <li key={item.id}>
                {item.name} - {item.genre} - {item.description} -{' '}
                {item.dateLent}
              </li>
            )
          })}
        </ul>
        <h2 className="new-item">Add New Item: </h2>
      </div>
    </>
  )
}
