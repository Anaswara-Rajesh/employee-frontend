import React, { useMemo } from "react";
import SidebarHeader from "./SidebarHeader";
import SideNavItem from "./SideNavItem";
import { ImUsers } from "react-icons/im";

function SideBar() {
  const sideNavMenus = [
    {
      id: 1,
      label: "Employees",
      link: "/employee",
      icon: <ImUsers color="grey" />,
    },
  ];
  const sideNavList = useMemo(
    () =>
      sideNavMenus.map((item) => (
        <SideNavItem
          key={item.id}
          label={item.label}
          icon={item.icon}
          link={item.link}
        />
      )),
    [sideNavMenus]
  );
  return (
    <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-primary duration-300 ease-linear lg:static lg:translate-x-0 -translate-x-full">
      <SidebarHeader />
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav
          className="mt-5 py-4 px-4 lg:mt-9 lg:px-6"
          x-data="{selected: $persist('Dashboard')}"
        >
          <div>
            <h3 className="mb-4 ml-4 text-sm font-medium text-[#d4d4d8]">
              MENU
            </h3>
            <ul className="mb-6 flex flex-col gap-1.5">{sideNavList}</ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default SideBar;
