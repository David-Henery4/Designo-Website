
import { Link } from "react-router-dom";
import { logoDark, BurgerIcon, CloseIcon } from "../assets";
import navigationData from "../data/navigationData";


const Navbar = ({ isSidebarActive, setIsSidebarActive }) => {
  //
  return (
    <nav className="relative py-9 -mb-20 col-start-2 col-end-12 flex justify-between items-start sm:items-center sm:py-16 smDesk:-mb-40">
      {/* LEFT */}
      <div>
        <Link to="/">
          <img
            className="w-48"
            onClick={() => {
              setIsSidebarActive(false);
            }}
            src={logoDark}
            alt="Dark version of the 'DESIGNO' logo used in the top navigation bar"
          />
        </Link>
      </div>

      {/* RIGHT */}
      <div>
        {isSidebarActive ? (
          <CloseIcon
            className="hover:cursor-pointer sm:hidden"
            onClick={() => {
              setIsSidebarActive(false);
            }}
          />
        ) : (
          <BurgerIcon
            className="hover:cursor-pointer sm:hidden"
            onClick={() => {
              setIsSidebarActive(true);
            }}
          />
        )}
        <ul className="text-sm leading-[14px] tracking-[2px] hidden justify-center items-center gap-5 sm:flex md:gap-10">
          {navigationData.map((navDta) => {
            return (
              <li key={navDta?.id}>
                <Link to={navDta?.link}>{navDta?.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
