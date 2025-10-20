import { createBrowserRouter } from "react-router";
import Root from "@/page/Root";
import Main from "@/page/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Main,
      },
    ],
  },
]);
