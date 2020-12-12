import React from "react";
import { TopHeader } from "../components/header/TopHeader";
 
export const AppLayout = ({ children, ...props }:any) => {
  return <div className="relative ">
      <div className="top-header flex py-2"><TopHeader/> </div>
      <div></div>
      <div></div>
  </div>
};
