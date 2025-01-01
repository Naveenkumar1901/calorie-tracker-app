import React from "react";
import { Route } from "react-router-dom";

export default function FullLayout({ children }) {
  return (
    <Route render={() => (<>{children}</>)} />
  );
};