import { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Overlay from "./Overlay"


const SharedContent = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  //
  return (
    <main className="App relative max-w-[1440px] m-auto font-jost grid grid-cols-main gap-y-20 md:grid-cols-mainTab smDesk:gap-y-40 lgDesk:grid-cols-mainLgDesk">
      <Overlay
        setIsSidebarActive={setIsSidebarActive}
        isSidebarActive={isSidebarActive}
      />
      <Navbar
        setIsSidebarActive={setIsSidebarActive}
        isSidebarActive={isSidebarActive}
      />
      <Sidebar
        setIsSidebarActive={setIsSidebarActive}
        isSidebarActive={isSidebarActive}
      />
      <Outlet />
      <Footer />
    </main>
  );
}

export default SharedContent