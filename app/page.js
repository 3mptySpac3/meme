"use client";
import HamburgerIcon from './comps/hambIcon';
import { Icon } from '@iconify/react';
import React, { useState,  } from 'react';
import LineArt1 from './comps/Art/lineart1';
import LineArt2 from './comps/Art/lineart2';
import LineArt3 from './comps/Art/lineart3';
import Link from 'next/link';




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
            <HamburgerIcon isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)}/>
          </button>
          {/* Horizontal Dropdown Sidbar */}
          {isSidebarOpen&& (
              <div className={`w-10/12 bg-[#EDF0DA] mt-16 rounded-lg transform transition-all duration-75 ease-in-out ${isSidebarOpen ? 'translate-y-0' : '-translate-y-full'}`}>
              <div>
                {/*  Dropdown Sidbar content */}
                <ul className="flex flex-row justify-between ">
                  <li className="flex-1 text-center">
                    <div className="flex flex-col items-center justify-center ">
                      <Link href="/Pages/Intellect">
                      <Icon icon="ph:brain-thin" color="#7699D4" width="40" height="40" />
                      <span className='font-thin italic'>Intellect</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex-1 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Link href="/Pages/Physical">
                      <Icon icon="circum:dumbbell" color="#7699D4" width="40" height="40" />
                      <span className='font-thin italic'>Physical</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex-1 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Link href="/Pages/Family">
                      <Icon icon="ph:baby-thin" color="#7699D4" width="40" height="40" />
                      <span className='font-thin italic'>Family</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex-1 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Link href="/Pages/Love">
                      <Icon icon="ph:heart-thin" color="#7699D4" width="40" height="40" />
                      <span className='font-thin italic'>Love</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex-1 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Link href="/Pages/Friendship">
                      <Icon icon="arcticons:funmax" color="#7699D4" width="40" height="40" />
                      <span className='font-thin italic'>Friends</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex-1 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Link href="/Pages/Wealth">
                      <Icon icon="healthicons:money-bag-outline" color="#7699D4" width="40" height="40" />
                      <span className='font-thin italic'>Wealth</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex-1 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Link href="/Pages/Self">
                      <Icon icon="arcticons:hwmirror" color="#7699D4" width="40" height="40" />
                      <span className='font-thin italic'>Self</span>
                      </Link>
                    </div>
                  </li>
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
            <PositionedElement x={1100} y={115}>
              <div>
                <LineArt1 />
                
              </div>
            </PositionedElement>
          </div> 
          {/* End of Image right */}

          <div> 
            {/* Start of image left  */}
           <PositionedElement x={30} y={300}>
            <div>
              <LineArt2 />
            </div>
          </PositionedElement>
          </div> 
          {/* End of image left  */}

          <div> 
            {/* Start of image middle  */}
           <PositionedElement x={450} y={100}>
            <div>
              <LineArt3 />
            </div>
          </PositionedElement>
          </div> 
          {/* End of image middle  */}

          <div> 
            {/* Start of Welcome "Auth User" */}
           <PositionedElement x={600} y={270}>
            <div className="bg-[#EDF0DA] w-[475px] h-[200px] justify flex justify-center items-center rounded-2xl font-thin text-[30px] italic border border-black border-solid">
            Welcome Auth User
            </div>
            </PositionedElement>
          </div> 
          {/* End of Welcome "Auth User" */}
          
         <div> 
          {/* Start of Smile Button Div */}
           <PositionedElement x={200} y={490}>
            <div className="bg-[#EDF0DA] w-[200px] h-[75px] justify flex justify-center items-center rounded-2xl font-thin text-[30px] italic  border border-black border-solid">
           <ButtonComponent
               onClick={() => handleButtonClick('Smile')}
               label="&quot;Smile&quot;"
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
