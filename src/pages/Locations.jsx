import locationsDetails from "../data/locationsDetails";

const Locations = () => {
  return (
    <section className="col-start-1 col-end-13 grid gap-10 sm:col-start-2 sm:col-end-12 sm:gap-[120px]">
      {locationsDetails?.map((loc) => {
        return (
          <div
            key={loc?.id}
            className="w-full grid group sm:gap-8 smDesk:grid-cols-mapCardDesk even:smDesk:grid-cols-mapCardDeskReverse"
          >
            {/* MAP */}
            <div className="sm:rounded-2xl sm:overflow-hidden smDesk:col-start-2 smDesk:col-end-3 smDesk:row-start-1 smDesk:row-end-2 group-even:smDesk:col-start-1 group-even:smDesk:col-end-2">
              <picture>
                <source
                  srcSet={loc.mapImage.desk}
                  media="(min-width:58.12em)"
                />
                <source srcSet={loc.mapImage.tab} media="(min-width:30.31em)" />
                <img
                  className="w-full object-cover smDesk:h-full"
                  src={loc?.mapImage?.desk}
                  alt={`map of the office location in ${loc?.name}`}
                  srcSet={loc?.mapImage?.desk}
                />
              </picture>
            </div>

            {/* DETAILS */}
            <div className="w-full py-20 px-6 flex flex-col justify-center items-center gap-6 bg-baige sm:rounded-2xl sm:items-start sm:px-[75px] sm:py-[88px] large:px-24 large:py-[88px]">
              {/* Name */}
              <h3 className="text-head1Mob leading-9 font-medium text-peach xsm:text-head2 xsm:leading-head2">
                {loc?.name}
              </h3>

              {/* Address & Contact */}
              <div className="flex flex-col justify-center items-center text-center gap-6 leading-bodyMob text-bodyMob font-normal text-darkGrey sm:flex-row sm:gap-8 sm:text-left sm:text-base sm:leading-body">
                {/* Address */}
                <div>
                  <h4 className="font-bold">{loc?.address?.locationName}</h4>
                  <p>{loc?.address?.street}</p>
                  <p>
                    {loc?.address?.city}
                    <span> {loc?.address?.postCode}</span>
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="font-bold">Contact</h4>
                  <p>P: {loc?.contact?.phoneNumber}</p>
                  <p>M: {loc?.contact?.email}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Locations;
