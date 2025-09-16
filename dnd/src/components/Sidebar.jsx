import React from "react";
import DragnDrop from "./DragnDrop";
import Preview from "./Preview";
import TextContex from "./TextContex";
import { useContext } from "react";
import { DocumentContext } from "../context/Document";
import CollegeInfo from "./CollegeInfo";
import UserChat from "./UserChat";

const Sidebar = () => {
  const sourceList = useContext(DocumentContext);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center border-red border-2">
          {/* Page content */}
          <CollegeInfo/>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-300 text-base-content max-h-full w-96 px-4 border-2 ml-5 mt-2 border-white fixed top-32 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200">
            <DragnDrop />
            <Preview />
            <TextContex />
          </ul>
        </div>
      </div>
      <UserChat />
    </div>
  );
};

export default Sidebar;
