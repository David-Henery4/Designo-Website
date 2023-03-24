import { logoDark, BurgerIcon } from "../assets";
import navigationData from "../data/navigationData";

const Navbar = () => {
  return (
    <nav className="py-9 -mb-20 col-start-2 col-end-12 flex justify-between items-start sm:items-center">
    
      {/* LEFT */}
      <div>
        <img
          className="w-48"
          src={logoDark}
          alt="Dark version of the 'DESIGNO' logo used in the top navigation bar"
        />
      </div>
      
      {/* RIGHT */}
      <div>
        <BurgerIcon className="hover:cursor-pointer sm:hidden"/>
        <ul className="text-sm leading-[14px] tracking-[2px] hidden justify-center items-center gap-5 sm:flex md:gap-10">
          {navigationData.map(navDta => {
            return (
              <li key={navDta?.id}>
                <a href={navDta?.link}>
                  {navDta?.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    
    </nav>
  );
};

export default Navbar;
