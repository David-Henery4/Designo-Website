

const DesignItemCard = ({img, title,desc}) => {
  return (
    <div className="w-full rounded-2xl overflow-hidden flex flex-col lgMob:flex-row lgMob:max-h-[310px] smDesk:flex-col smDesk:max-h-none smDesk:h-auto hover:cursor-pointer">
      <img
        className="lgMob:w-1/2 lgMob:object-top smDesk:w-auto smDesk:flex-[1]"
        src={img}
        alt={`Screenshot of item ${title}`}
      />
      <div className="bg-baige px-7 py-8 flex flex-col justify-center items-center gap-4 text-center flex-[1] smDesk:justify-start group hover:bg-peach ">
        <h3 className="text-peach text-xl leading-head3 tracking-[5px] font-medium group-hover:text-white">
          {title}
        </h3>
        <p className="text-base leading-body font-normal text-darkGrey group-hover:text-white">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default DesignItemCard