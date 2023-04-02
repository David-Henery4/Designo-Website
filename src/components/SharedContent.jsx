import { useState, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Overlay from "./Overlay";

// SCROLL TO TOP AFTER NAVIGATION
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const SharedContent = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  //
  return (
    <main className="App overflow-hidden relative max-w-[1440px] m-auto font-jost grid grid-cols-main gap-y-20 md:grid-cols-mainTab smDesk:gap-y-40 lgDesk:grid-cols-mainLgDesk">
      <Wrapper>
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
      </Wrapper>
    </main>
  );
};

export default SharedContent;
