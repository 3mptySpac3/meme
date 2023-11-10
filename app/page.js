"use client";
import HamburgerIcon from './comps/hambIcon';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#303633]">
      <div id="Above Div" style={{ height: '5vh' }} className="w-full relative flex items-center justify-center">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-5 right-5 p-2 py-1 rounded-md "
        >
          <HamburgerIcon />
        </button>
        {/* Horizontal Dropdown Sidbar */}
        {isSidebarOpen&& (
            <div className={`w-10/12 bg-[#EDF0DA] mt-16 rounded-lg transform transition-all duration-75 ease-in-out ${isSidebarOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <div>{/*  Dropdown Sidbar content */}
              <ul className="flex flex-row justify-between p-4">
                <li className="flex-1 text-center" ><Icon icon="ph:brain-thin" color="black" className="inline-block mr-2" width="40" height="40" /></li>
                <li className="flex-1 text-center"><Icon icon="circum:dumbbell" color="black" className="inline-block mr-2" width="40" height="40" /></li>
                <li className="flex-1 text-center"><Icon icon="ph:baby-thin" color="black" className="inline-block mr-2" width="40" height="40" /></li>
                <li className="flex-1 text-center"><Icon icon="ph:heart-thin" color="black" className="inline-block mr-2" width="40" height="40" /></li>
                <li className="flex-1 text-center"><Icon icon="arcticons:funmax" color="black" className="inline-block mr-2" width="40" height="40" /></li>
                <li className="flex-1 text-center"><Icon icon="healthicons:money-bag-outline" color="black" className="inline-block mr-2" width="40" height="40" /></li>
                <li className="flex-1 text-center"><Icon icon="arcticons:hwmirror" color="black" className="inline-block mr-2" width="40" height="40" /></li>
              </ul>
            </div>
          </div>)}
      </div> {/* End of above div */}
      
      <div id="Border Line" className="border-b-2 border-[#EDF0DA] w-full mt-16"></div> {/* Border Line seperating top from buttom */}
      <div className="flex-1 w-full"> {/* Below Div */}
        <h1 className="text-white text-3xl">Below</h1>
      </div> {/* End of below div */}
    </div>
  );
};

export default HomePage;
