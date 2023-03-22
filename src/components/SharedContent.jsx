import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"


const SharedContent = () => {

  return (
  <main className="App font-jost grid grid-cols-main">
    <Navbar/>
    <Outlet/>
  </main>
  )
}

export default SharedContent