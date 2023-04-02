
const Overlay = ({ isSidebarActive, setIsSidebarActive }) => {
  //
  return (
    <div
      className={`absolute h-full w-full top-[97.66px] left-0 bg-[#000000]/50 z-[495] ${isSidebarActive ? "block" : "hidden"}`}
      onClick={() => {
        setIsSidebarActive(false)
      }}
    ></div>
  );
};

export default Overlay