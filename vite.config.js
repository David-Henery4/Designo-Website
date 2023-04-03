import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import copy from "rollup-plugin-copy";

function copyPlugin() {
  return copy({
    targets: [
      {
        src: "./src/assets/home/mobile/image-web-design.jpg",
        dest: "./dist/assets/home/mobile",
      },
      {
        src: "./src/assets/home/tablet/image-web-design.jpg",
        dest: "./dist/assets/home/tablet",
      },
      {
        src: "./src/assets/home/desktop/image-web-design-large.jpg",
        dest: "./dist/assets/home/desktop",
      },
      {
        src: "./src/assets/home/mobile/image-app-design.jpg",
        dest: "./dist/assets/home/mobile",
      },
      {
        src: "./src/assets/home/tablet/image-app-design.jpg",
        dest: "./dist/assets/home/tablet",
      },
      {
        src: "./src/assets/home/desktop/image-app-design.jpg",
        dest: "./dist/assets/home/desktop",
      },
      {
        src: "./src/assets/home/mobile/image-graphic-design.jpg",
        dest: "./dist/assets/home/mobile",
      },
      {
        src: "./src/assets/home/tablet/image-graphic-design.jpg",
        dest: "./dist/assets/home/tablet",
      },
      {
        src: "./src/assets/home/desktop/image-graphic-design.jpg",
        dest: "./dist/assets/home/desktop",
      },
    ],
  });
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), copyPlugin()],
});
