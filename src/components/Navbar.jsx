import { logoDark, BurgerIcon } from "../assets";

const Navbar = () => {
  return (
    <nav className="py-9 -mb-20 col-start-2 col-end-12 flex justify-between items-start">
    
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
        <BurgerIcon className="hover:cursor-pointer"/>
      </div>
    
    </nav>
  );
};

export default Navbar;
