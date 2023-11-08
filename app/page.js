import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#303633]">
      <div style={{ height: '5vh' }} className="w-full flex items-center justify-center">
        <h1 className="text-white text-3xl">Above</h1>
      </div>
      
      <div className="border-b-2 border-[#EDF0DA] w-full my-8"></div>

      <div className="flex-1 w-full">
        <h1 className="text-white text-3xl">Below</h1>
      </div>
    </div>
  );
};

export default HomePage;
