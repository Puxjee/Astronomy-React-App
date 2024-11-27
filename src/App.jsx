import { Footer } from "./components/Footer"
import { Main } from "./components/Main"
import { SideBar } from "./components/Sidebar"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const [showSideBar, setShowSideBar] = useState(false)

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar)
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_API_KEY}`
      const today = new Date().toDateString()
      const localKey = `NASA-${today}`

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log("Fetched from Local Storage Today")
        return
      }

      localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log("Fetched from API Today")
      } catch (err) {
        console.log(err)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className='loadingState'>
          <i className='fa-solid fa-gear'></i>
          <h2>Fetching Data... Please Wait</h2>
        </div>
      )}
      {showSideBar === true && (
        <SideBar
          data={data}
          handleShowSideBar={handleShowSideBar}
        />
      )}
      {data && (
        <Footer
          data={data}
          handleShowSideBar={handleShowSideBar}
        />
      )}
    </>
  )
}

export default App
