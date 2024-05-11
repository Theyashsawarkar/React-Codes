
// eslint-disable-next-line react/prop-types
function Card({fun , jalva}) {
  return (
    <div onClick={() =>fun(`${Math.random()}`)}>
      {jalva}
    </div>
  )
}

export default Card ;
