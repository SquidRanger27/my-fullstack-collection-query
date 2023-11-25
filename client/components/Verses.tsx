export default function Verses(verses) {
  return (
    <>
      <div className="profile">
        <h2>Description: {verses.description}</h2>
        <h3>Verse: {verses.verse}</h3>
      </div>
    </>
  )
}
