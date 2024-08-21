import AvatharSection from './AvatharSection';
import SearchInput from './SearchInput';
import Notification from './Notification';
import React from 'react';

function Header() {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <SearchInput />
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <Notification />
          </ul>
          <AvatharSection />
        </div>
      </div>
    </header>
  );
}

export default Header;
