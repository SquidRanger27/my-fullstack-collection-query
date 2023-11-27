function DestinationForm() {
  return (
    <>
      <form>
        <label htmlFor="destinationName">Destination Name:</label>
        <input type="text" id="destinationName" value={destination.name} />
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={destination.description} />
      </form>
    </>
  )
}
