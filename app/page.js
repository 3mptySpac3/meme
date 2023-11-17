"use client";
import HamburgerIcon from './comps/hambIcon';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const ButtonComponent = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className=" text-[#7699D4]  flex items-center justify-center">
      {label}
    </button>
  );
};

const PositionedElement = ({ x, y, children }) => {
  const style = {
    position: 'absolute',
    top: `${y}px`, 
    left: `${x}px`, 
  };

  return <div style={style}>{children}</div>;
};

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleButtonClick = (buttonLabel) => {
      console.log(`${buttonLabel} button clicked`);
    };

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
              <div>
                {/*  Dropdown Sidbar content */}
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
        </div> 
        {/* End of above div */}
        
        
        <div id="Border Line" className="border-b-2 border-[#EDF0DA] w-full mt-16"></div> 
        {/* Border Line seperating top from buttom */}

        <div className="flex-1 w-full"> 
        {/* Below Div */}

          <div>
             {/* Start of MeMe Div */}
            <PositionedElement x={150} y={125}>
              <div className="bg-[#EDF0DA] w-[200px] h-[75px] justify flex justify-center items-center rounded-2xl font-thin text-[30px] italic  border border-black border-solid">
            MeMe
            </div>
            </PositionedElement>
          </div> 
          {/* End of MeMe Div */}

          <div>
            {/* Start of Image right */}
            <PositionedElement x={1000} y={100}>
              <div>
              Image right
              </div>
            </PositionedElement>
          </div> 
          {/* End of Image right */}

          <div> 
            {/* Start of Image left */}
           <PositionedElement x={350} y={420}>
            <div>
            Image left
            </div>
          </PositionedElement>
          </div> 
          {/* End of Image left */}

          <div> 
            {/* Start of Welcome "Auth User" */}
           <PositionedElement x={550} y={300}>
            <div className="bg-[#EDF0DA] w-[475px] h-[200px] justify flex justify-center items-center rounded-2xl font-thin text-[30px] italic border border-black border-solid">
            Welcome Auth User
            </div>
            </PositionedElement>
          </div> 
          {/* End of Welcome "Auth User" */}
          
         <div> 
          {/* Start of Smile Button Div */}
           <PositionedElement x={300} y={500}>
            <div>
           <ButtonComponent
               onClick={() => handleButtonClick('Smile')}
               label="Smile"
            />
            </div>
           </PositionedElement>
          </div> 
          {/* End of Smile Button Div */}

        </div> 
        {/* End of below div */}
      </div> 
    );
  };


  export default HomePage;
