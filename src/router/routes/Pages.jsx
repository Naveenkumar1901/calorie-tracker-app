import { lazy } from "react";

const Pages = [
  {
    path: "/login",
    component: lazy(() => import("../../view/authentication/login")),
    layout: "FullLayout",
  },
  {
    path: "/dashboard",
    component: lazy(() => import("../../view/dashboard")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/error-404",
    component: lazy(() => import("../../view/pages/errors/404")),
    layout: "FullLayout",
  },
];

export default Pages;