import { Link } from "react-router-dom";
import locationSectionData from "../data/locationSectionData";
import {SmallCircleBgPattern} from "../assets"

const LocationOptionsSection = () => {
  return (
  <section className="col-start-2 col-end-12 flex flex-col justify-center items-center gap-12 sm:gap-14 smDesk:flex-row smDesk:gap-[30px]">
    {locationSectionData.map(loc => {
      return (
        <div
          key={loc.id}
          className="w-full flex flex-col justify-center items-center gap-12 text-center"
        >
          <div className="relative">
            <SmallCircleBgPattern className="absolute top-0 left-0"/>
            <loc.image />
          </div>
          <div className="grid gap-8 justify-items-center">
            <h3 className="text-xl leading-head3 tracking-[5px] font-medium">
              {loc.title}
            </h3>
            <Link
              to={loc.link}
              className="bg-peach p-4 text-white rounded-lg"
            >
              SEE LOCATION
            </Link>
          </div>
        </div>
      );
    })}
  </section>
  )
};

export default LocationOptionsSection;
