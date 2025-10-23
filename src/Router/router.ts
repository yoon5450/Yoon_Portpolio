import { createBrowserRouter } from "react-router";
import Root from "@/page/Root";
import Main from "@/page/Main";
import ProjectDetail from "@/page/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Main,
      },
      {
        path: "project/:projectName",
        Component: ProjectDetail,
      },
    ],
  },
]);
