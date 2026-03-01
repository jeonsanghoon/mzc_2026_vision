import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Slide1 } from "./components/Slide1";
import { Slide3 } from "./components/Slide3";
import { Slide4 } from "./components/Slide4";
import { Slide5 } from "./components/Slide5";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Slide1 },
      { path: "slide1", Component: Slide1 },
      { path: "slide2", Component: Slide3 },
      { path: "slide3", Component: Slide4 },
      { path: "slide4", Component: Slide5 },
    ],
  },
]);
