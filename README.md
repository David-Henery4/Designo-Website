# Frontend Mentor - Designo agency website solution

This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Your Message` fields are empty should show "Can't be empty"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"
- **Bonus**: View actual locations on the locations page maps (we recommend [Leaflet JS](https://leafletjs.com/) for this)

### Screenshot

![Home/Hero-Screenhot](./screenshot/home-hero.png)

### Links


- Solution URL: [Fontend-mentor](https://www.frontendmentor.io/solutions/designomultipagesite-react-tailwindcss-vite-reactrouter-S6KJwJxZgF)
- Live Site URL: [Design-customs](https://designo-customs.netlify.app)

## My process

### Built with

- HTML5 markup
- CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vite](https://v3.vitejs.dev) - Project setup/bundler library
- [SCSS](https://sass-lang.com) - CSS extension language
- [TailwindCSS](https://tailwindcss.com) - CSS utility class library
- [React](https://reactjs.org) - JS library
- [React-Router](https://reactrouter.com/en/main) - Reacting Routing Library
- [Leaflet](https://leafletjs.com) - Interactive maps javascript library
- [React-Leaflet](https://react-leaflet.js.org) - Helps intergrate Leaflet into react via components

### What I learned

This is only the second project I have used "vite" to setup my project and the difference in not only speed but the dev experience as whole is a lot more enjoyable than if I would of used "create-react-app". One of the main reasons for this is because of the little things, for instance hot module replace, which renders css changes in only the places you actually make changes to, instead of refreshing in the entire page. The little things like this make for me a better, more enjoyable dev experience and I will definitely using "vite" more when setting up my projects in the future.

Another thing about this project was it enabled me to use "leaflet.js", which I have not used in a long time. I have always enjoyed using libraries like this because it makes me want to develop features that could be used in future projects someday and I find its an really intresting type of library in general. 

Here is the simple way I implemented the map into my project:

```js
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

/* MAP */

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
</div>;
```

### Continued development

In the future I'm keen to try and incorperate maps into my own apps as I feel there could be some fun and interesting features that can be built with them and I look forward to implement these into future projects and create some decent apps using them.

### Useful resources

- [leaflet.js docs](https://leafletjs.com) - This is the leaflet.js documentation, if you want to learn more about how to use it.
- [react-leaflet docs](https://react-leaflet.js.org/) - This is the leaflet.js documentation, check this out if you want to learn more about how to use leaflet along side react.

## Author

- Website - [DjhWebdevelopment](https://www.djhwebdevelopment.com/)
- Frontend Mentor - [@David-Henery4](https://www.frontendmentor.io/profile/David-Henery4)
- LinkedIn - [David Henery](https://www.linkedin.com/in/david-henery-725458241)
