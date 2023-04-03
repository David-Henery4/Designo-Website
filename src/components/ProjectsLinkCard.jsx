import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../assets";

const ProjectsLinkCard = ({ title, link, bgImage, changes = null }) => {
  const { mob, tab, desk } = bgImage;
  return (
    <Link
      to={link}
      className={`w-full ${changes?.colStart} ${changes?.colEnd} 
      ${changes?.rowStart} ${changes?.rowEnd} ${changes?.rowStart} ${changes?.rowEnd}`}
    >
      <div
        className={`relative text-white text-center p-6 w-full h-60 font-medium rounded-2xl overflow-hidden flex flex-col justify-center items-center gap-3  bg-no-repeat bg-cover bg-top xsm:h-52 xsm:bg-left ${mob} ${tab} ${desk} ${changes?.height}`}
      >
        <h2 className="relative text-head3 tracking-[1.4px] leading-9 xsm:text-head2 xsm:leading-head2 xsm:tracking-[2px] peer z-10">
          {title}
        </h2>
        <p className="relative text-bodyMob tracking-[5px] inline-flex justify-center items-center gap-4 peer z-10">
          VIEW PROJECTS
          <span>
            <ArrowRightIcon />
          </span>
        </p>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 hover:bg-peach/80 peer-hover:bg-peach/80"></div>
      </div>
    </Link>
  );
};

export default ProjectsLinkCard;
