import { useLocation } from "react-router-dom";
import {
  WebIntroPattern,
  AppIntroPattern,
  GraphicIntroPattern,
  // shared
  DesignPagesIntroTabletPattern,
  DesignPagesIntroMobilePattern,
} from "../assets";
// #d
const ItemPagesHeader = ({ title, desc }) => {
  const { pathname } = useLocation();
  //
  console.log(pathname === "/web-design");
  return (
    <header className="relative w-full text-center bg-peach text-white overflow-hidden col-start-1 col-end-13 flex flex-col justify-center items-center px-6 py-24 gap-6 sm:col-start-2 sm:col-end-12 sm:rounded-2xl">
      <DesignPagesIntroMobilePattern className="absolute -top-3 -left-[515px] pointer-events-none sm:hidden" />
      <DesignPagesIntroTabletPattern className="absolute hidden -top-[135px] left-0 cursor-pointer sm:block smDesk:hidden" />
      {pathname === "/web-design" && (
        <WebIntroPattern className="absolute hidden -top-[135px] right-0 smDesk:block" />
      )}
      {pathname === "/app-design" && (
        <AppIntroPattern className="absolute hidden -top-[40%] -left-[45px] smDesk:block " />
      )}
      {pathname === "/graphic-design" && (
        <GraphicIntroPattern className="absolute hidden -top-[40%] -left-[30px] smDesk:block " />
      )}
      <h2 className="relative text-head1Mob leading-9 font-medium xsm:text-5xl xsm:leading-head1 z-10">
        {title}
      </h2>
      <p className="text-bodyMob font-light leading-bodyMob max-w-sm xsm:text-base xsm:leading-head3">
        {desc}
      </p>
    </header>
  );
};

export default ItemPagesHeader;
