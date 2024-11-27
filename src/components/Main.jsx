export const Main = (props) => {
  const { data } = props
  return (
    <div className='imgContainer'>
      <img
        src={data.hdurl}
        alt={data.title || "bgImage"}
        className='bgImage'
      />
    </div>
  )
}
