export default function AddForm() {
  const [file, setFile] = useState()
  const [description, setDescription] = useState("")

  const submit = async event => {
    event.preventDefault()

    // Send the file and description to the server
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          filename={file} 
          onChange={e => setFile(e.target.files[0])} 
          type="file" 
          accept="image/*"
        ></input>
        <input
          onChange={e => setDescription(e.target.value)} 
          type="text"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}