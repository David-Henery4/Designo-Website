import { Link } from "react-router-dom";
import navigationData from "../data/navigationData";

const Sidebar = ({ isSidebarActive, setIsSidebarActive }) => {
  // 
  return (
    <aside
      className={`absolute top-[97.66px] left-0 w-full px-6 py-12 bg-black text-white text-2xl leading-bodyMob tracking-[2px] transition-all z-40 sm:hidden ${
        isSidebarActive ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="grid gap-8">
        {navigationData.map((navDta) => {
          return (
            <li key={navDta.id}>
              <Link
                to={navDta.link}
                onClick={() => {
                  setIsSidebarActive(false);
                }}
              >
                {navDta.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
