export const SideBar = (props) => {
  const { handleShowSideBar, data } = props

  return (
    <div className='sidebar'>
      <div
        className='bgOverlay'
        onClick={handleShowSideBar}
      ></div>
      <div className='sidebarContents'>
        <h2>{data?.title}</h2>
        <div className='descriptionContainer'>
          <h4 className='descriptionTitle'>{data?.date}</h4>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleShowSideBar}>
          <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  )
}
