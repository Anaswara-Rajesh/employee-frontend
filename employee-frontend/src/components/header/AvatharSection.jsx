import React from 'react';

function AvatharSection() {
  return (
    <div className="relative" x-data="{ dropdownOpen: false }">
      <a className="flex items-center gap-4" href="#">
        <img
          className="w-14 h-14 p-1 rounded-full ring-2 ring-gray-300"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww"
          alt="Bordered avatar"
        />
      </a>
    </div>
  );
}

export default AvatharSection;
