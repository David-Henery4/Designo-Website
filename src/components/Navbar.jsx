import { Link } from "react-router-dom";
import { logoDark, BurgerIcon } from "../assets";
import navigationData from "../data/navigationData";

const Navbar = () => {
  return (
    <nav className="py-9 -mb-20 col-start-2 col-end-12 flex justify-between items-start sm:items-center sm:py-16 smDesk:-mb-40">
    
      {/* LEFT */}
      <div>
        <Link to="/">
        <img
          className="w-48"
          src={logoDark}
          alt="Dark version of the 'DESIGNO' logo used in the top navigation bar"
          />
          </Link>
      </div>
      
      {/* RIGHT */}
      <div>
        <BurgerIcon className="hover:cursor-pointer sm:hidden"/>
        <ul className="text-sm leading-[14px] tracking-[2px] hidden justify-center items-center gap-5 sm:flex md:gap-10">
          {navigationData.map(navDta => {
            return (
              <li key={navDta?.id}>
                <Link to={navDta?.link}>
                  {navDta?.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    
    </nav>
  );
};

export default Navbar;
