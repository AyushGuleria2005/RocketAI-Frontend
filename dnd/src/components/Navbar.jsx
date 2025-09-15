import React from "react";

const Navbar = () => {
  return (
    <div className="flex">
      <div className="navbar bg-base-300 shadow-sm p-8 border-orange-500 border-4 rounded-md m-3">
        <div className="flex-1">
          <a className="btn btn-ghost text-3xl">🚀 Rocket AI Bot</a>
        </div>
        <div className="flex gap-6 items-center">
          <h1 className="text-xl">Admin</h1>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
