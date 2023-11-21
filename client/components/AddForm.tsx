import { useState } from 'react'

export default function AddForm(){

  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform any validation if needed

    // Make API request or perform any other action with the form data
    console.log('Name:', name);
    console.log('Image:', image);
    console.log('Description:', description);

    // Reset form fields
    setName('');
    setImage(null);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Artwork Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Upload Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}