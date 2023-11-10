"use client";

import React, { useState } from 'react';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#303633]">
      <div id="Above Div" style={{ height: '5vh' }} className="w-full relative flex items-center justify-center">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-5 right-5 p-2 bg-[#EDF0DA] text-[#303633] px-2 py-1 rounded-md"
        >
          Menu
        </button>
        {/* Horizontal Dropdown Sidbar */}
        {isSidebarOpen && (
          <div  className=" w-8/12 bg-[#EDF0DA] mt-6 rounded-b-[15px]">
            <div>{/*  Dropdown Sidbar content */}
              <ul className="flex flex-row justify-between p-4">
                <li className="flex-1 text-center">l1</li>
                <li className="flex-1 text-center">l2</li>
                <li className="flex-1 text-center">l3</li>
                <li className="flex-1 text-center">l4</li>
              </ul>
            </div>
          </div>)}
      </div>
      
      <div id="Border Line" className="border-b-2 border-[#EDF0DA] w-full mt-16"></div> {/* Border Line seperating top from buttom */}
      <div className="flex-1 w-full">
        <h1 className="text-white text-3xl">Below</h1>
      </div>
    </div>
  );
};

export default HomePage;
