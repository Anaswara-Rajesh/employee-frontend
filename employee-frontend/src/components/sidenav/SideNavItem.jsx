import classNames from "classnames";
import React from "react";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

function SideNavItem({ icon, label, link }) {
  const { pathname } = useLocation();

  const isActive = useMemo(() => {
    if (link === "") return false;
    if (pathname === link) return true;
    return false;
  }, [pathname, link]);

  const outerClassName = classNames("hover:bg-[#333a48]", {
    "bg-[#333a48]": isActive,
  });
  return (
    <li className={outerClassName}>
      <Link className="flex py-2 px-4 items-center rounded-sm" to={link}>
        {icon}
        <div className="group relative gap-2.5 rounded-sm py-2 px-4 font-medium text-[#d4d4d8] duration-300 ease-in-out">
          {label}
        </div>
      </Link>
    </li>
  );
}

export default SideNavItem;
