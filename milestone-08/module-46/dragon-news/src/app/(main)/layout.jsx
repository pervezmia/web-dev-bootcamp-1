import React from "react";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import BreakingNews from "@/components/shared/BreakingNews";



const MainLayout = ({ children }) => {
  return (
    <div className="space-y-4">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default MainLayout;
