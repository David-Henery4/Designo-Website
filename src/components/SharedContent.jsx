import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"


const SharedContent = () => {

  return (
  <main className="App max-w-[1440px] m-auto font-jost grid grid-cols-main gap-y-20 md:grid-cols-mainTab smDesk:gap-y-40 lgDesk:grid-cols-mainLgDesk">
    <Navbar/>
    <Outlet/>
    <Footer/>
  </main>
  )
}

export default SharedContent