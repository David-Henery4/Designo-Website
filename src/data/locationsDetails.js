import {australiaMapDesk, australiaMapTab
, ukMapDesk, ukMapTab, canadaMapDesk, canadaMapTab} from "../assets"


const locationsDetails = [
  {
    id: 1,
    name: "Canada",
    address: {
      locationName: "Designo Central Office",
      street: "3886 Wellington Street",
      city: "Toronto, Ontario",
      postCode: "M9C 3J5",
    },
    contact: {
      phoneNumber: "+1 253-863-8967",
      email: "contact@designo.co",
    },
    mapImage: {
      tab: canadaMapTab,
      desk: canadaMapDesk,
    },
  },
  {
    id: 2,
    name: "Australia",
    address: {
      locationName: "Designo AU Office",
      street: "19 Balonne Street",
      city: "New South Wales",
      postCode: "2443",
    },
    contact: {
      phoneNumber: "(02) 6720 9092",
      email: "contact@designo.au",
    },
    mapImage: {
      tab: australiaMapTab,
      desk: australiaMapDesk,
    },
  },
  {
    id: 3,
    name: "United Kingdom",
    address: {
      locationName: "Designo UK Office",
      street: "13  Colorado Way",
      city: "Rhyd-y-fro",
      postCode: "SA8 9GA",
    },
    contact: {
      phoneNumber: "078 3115 1400",
      email: "contact@designo.uk",
    },
    mapImage: {
      tab: ukMapTab,
      desk: ukMapDesk,
    },
  },
];

export default locationsDetails