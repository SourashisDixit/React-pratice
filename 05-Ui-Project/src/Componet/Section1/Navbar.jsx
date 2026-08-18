import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4">
      <span className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
        Target Audience
      </span>

      <span className="rounded-full bg-gray-300 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black">
        Digital Banking Platform
      </span>
    </div>
  );
};

export default Navbar;