function Character(props) {
  const { name, alias, image } = props
  return (
    <>
      <div className="character">
        <h2>{alias ? alias : name}</h2>
        {alias ? <h3>Name: {name}</h3> : ''}
        <img src={image} alt={name} />
      </div>
    </>
  )
}

export default Character
