import React from "react";
import DragnDrop from "./DragnDrop";
import Preview from "./Preview";
import TextContex from "./TextContex";

const Sidebar = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center ">
          {/* Page content */}
          <h1>Hello world</h1>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-300 text-base-content min-h-full w-96 p-4">
            {/* Sidebar content here */}
            <DragnDrop />
            <Preview />
            <TextContex />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
