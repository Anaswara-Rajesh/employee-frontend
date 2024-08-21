import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../sidenav/SideBar';
import Header from '../header/Header';

function DashboardLayout() {
  return (
    <div id="side-bar" className="flex h-screen overflow-hidden bg-slate-300">
      <SideBar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>                
  );
}

export default DashboardLayout;
