import React from "react";
import { TopHeader } from "../components/header/TopHeader";

export const AppLayout = ({ children, ...props }: any) => {
  return <div className="relative ">
    <div className="top-header flex  "><TopHeader /> </div>
    <div>{children}</div>
   
  </div>
};
