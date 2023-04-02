import locationsDetails from "../data/locationsDetails";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ThreeCirclesBgPattern } from "../assets";

const Locations = () => {
  return (
    <div className="w-full col-start-1 col-end-13 max-w-[1440px] mx-auto grid grid-cols-main  mb-[120px]  md:grid-cols-mainTab lgDesk:grid-cols-mainLgDesk smDesk:mb-40">
      <section className="col-start-1 col-end-13 grid gap-10 sm:col-start-2 sm:col-end-12 sm:gap-[120px] smDesk:gap-8">
        {locationsDetails?.map((loc) => {
          return (
            <div
              key={loc?.id}
              className="w-full grid group sm:gap-8 smDesk:grid-cols-mapCardDesk even:smDesk:grid-cols-mapCardDeskReverse"
            >
              {/* MAP */}
              <div className="h-80 sm:h-[326px] sm:rounded-2xl sm:overflow-hidden smDesk:col-start-2 smDesk:col-end-3 smDesk:row-start-1 smDesk:row-end-2 group-even:smDesk:col-start-1 group-even:smDesk:col-end-2">
                <MapContainer
                  style={{ height: "100%", width: "100%" }}
                  className="h-full w-full relative"
                  center={loc?.coords}
                  zoom={13}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={loc?.coords}>
                    <Popup>{loc?.address?.locationName}</Popup>
                  </Marker>
                </MapContainer>
              </div>

              {/* DETAILS */}
              <div className="relative w-full py-20 px-6 overflow-hidden flex flex-col justify-center items-center gap-6 bg-baige sm:rounded-2xl sm:items-start sm:px-[75px] sm:py-[88px] large:px-24 large:py-[88px]">
                <ThreeCirclesBgPattern className="pointer-events-none absolute top-0 left-0 sm:-top-[80%]"/>
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
    </div>
  );
};

export default Locations;
