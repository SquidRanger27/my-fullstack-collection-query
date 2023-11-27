export default function Verses(verse) {
  return (
    <>
      <div className="profile">
        <div className="topic">
          <h2>Topic: {verse.description}</h2>
        </div>
        <div className="verse">
          <h3>Verse: {verse.verse}</h3>
        </div>
      </div>
    </>
  )
}
