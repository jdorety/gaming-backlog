import React from "react";
import Header from "../Header/Header";
import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout-wrapper">{children}</div>
    </>
  );
}
