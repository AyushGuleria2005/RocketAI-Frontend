import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 shadow-md hover:shadow-xl transition-all duration-200 p-8 border-black border-4 rounded-3xl m-1 fixed z-20">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl">🚀 Rocket AI Bot</a>
      </div>
      <div className="flex gap-6 items-center">
        <h1 className="text-lg font-semibold">Welcome back Admin</h1>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar hover:scale-105 transition-transform"
          >
            <div className="w-10 rounded-full shadow-md hover:shadow-lg">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
