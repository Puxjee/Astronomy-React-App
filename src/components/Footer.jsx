export const Footer = (props) => {
  const { showSideBar, handleShowSideBar, data } = props

  return (
    <footer>
      <div className='bgGradient'></div>
      <div>
        <h1>Astronomy Picture of the Day</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleShowSideBar}>
        <i className='fa-solid fa-circle-info'></i>
      </button>
    </footer>
  )
}
