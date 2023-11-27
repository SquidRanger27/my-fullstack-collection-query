function DestinationForm() {
  return (
    <>
      <form>
        <label htmlFor="name">Destination Name:</label>
        <input type="text" id="name" value={destination.name} />
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={destination.description} />
        <label htmlFor="image">Upload Image:</label>
        <input type="file" id="image" accept="image/png, image/jpeg" />
      </form>
    </>
  )
}
