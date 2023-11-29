"use client";
import NavBar from "@/app/comps/nav";
import React, {useState, useEffect}  from 'react';
import { Icon } from '@iconify/react';




const PositionedElement = ({ x, y, children }) => {
  const style = {
    position: 'absolute',
    top: `${y}px`, 
    left: `${x}px`, 
  };

  return <div style={style}>{children}</div>;
};

const IntellectPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className=" min-h-screen bg-[#303633]">
      {/* Top */}
      <div className="pag">
      <NavBar />
      </div>
      {/* End top */}
      {/* Bottom */}
      <div>
        <PositionedElement x={20} y={137}>
          <div className="bg-[#EDF0DA] w-[60px] h-[350px] rounded-2xl font-thin italic ">

            <PositionedElement x={10} y={10}>
            <div>
            {isMounted && (
              <Icon icon="arcticons:settings" />
            )}
            </div>
            </PositionedElement>

            <PositionedElement x={10} y={50}>
            <div>
            {isMounted && (
             <Icon icon="material-symbols-light:home-outline" />
            )}
            </div>
            </PositionedElement>
            
            <PositionedElement x={10} y={90}>
            <div>
            {isMounted && (
             <Icon icon="ph:plus-thin" />
            )}
            </div>
            </PositionedElement>
          </div>
        </PositionedElement>
      </div>


      <div>
        <PositionedElement x={117} y={520}>
          <div style={{ letterSpacing: '15px' }} className="bg-[#EDF0DA] w-[1044px] h-[60px] rounded-2xl text-[40px] flex justify-center items-center font-thin border-4 border-[white]">
            Intellect
          </div>
        </PositionedElement>
      </div>

      <div>
        <PositionedElement x={105} y={125}>
          <div className="bg-black w-[1065px] h-[375px] rounded-2xl font-thin italic bg-opacity-90">
            p3 middle
          </div>
        </PositionedElement>
      </div>


      {/* End bottom */}
    </div>

  );
};

export default IntellectPage;