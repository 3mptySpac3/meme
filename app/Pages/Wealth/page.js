"use client";
import NavBar from "@/app/comps/nav";
import React, {useState, useEffect}  from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';


const PositionedElement = ({ x, y, children }) => {
  const style = {
    position: 'absolute',
    top: `${y}px`, 
    left: `${x}px`, 
  };

  return <div style={style}>{children}</div>;
};


const WealthPage = () => {
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
      
      <div>
        <PositionedElement x={20} y={137}>
          <div className="bg-[#EDF0DA] w-[60px] h-[350px] rounded-2xl font-thin italic  border border-black hover:shadow-md ">



          <div className=" transition duration-500 hover:-translate-y-0.5">
          <PositionedElement x={9} y={277}>
              <div className="bg-black w-[40px] h-[40px] rounded-full shadow-lg shadow-black">
              </div>
            </PositionedElement>

            <PositionedElement x={12} y={282}>
            <div>
              {/*Settings*/}
              <Link href="./Settings">
              {isMounted && (
              <Icon icon="arcticons:settings" color="white" width="35" height="30" />
              )}
              </Link>
            </div>
            </PositionedElement >
            </div>

            



            <div className=" transition duration-500 hover:-translate-y-0.5">
            <PositionedElement x={10} y={31}>
            <div className="bg-black w-[40px] h-[40px] rounded-full shadow-lg shadow-black">
            </div>
            </PositionedElement>

            <PositionedElement x={15} y={35}>
            <div> 
              <Link href="/">
            {isMounted && (
             <Icon icon="iconamoon:home-thin"  color="white" width="30" height="30" />
            )}
              </Link>
            </div>
            </PositionedElement>
            </div>




            <div className=" transition duration-500 hover:-translate-y-0.5">
            <PositionedElement x={9} y={155}>
              <div className="bg-black w-[40px] h-[40px] rounded-full shadow-lg shadow-black">
              </div>
            </PositionedElement>

            <PositionedElement x={10} y={155}>
            <div>
            {isMounted && (
             <Icon icon="ph:plus-thin" color="white" width="40" height="40" />
            )}
            </div>
            </PositionedElement>
            </div>

          </div>
        </PositionedElement>
      </div>


      <div>
        <PositionedElement x={117} y={520}>
          <div style={{ letterSpacing: '15px' }} className="bg-[#EDF0DA] w-[1044px] h-[60px] rounded-2xl text-[40px] flex justify-center items-center font-thin border border-black">
            Wealth
          </div>
        </PositionedElement>
      </div>

      <div>
        <PositionedElement x={105} y={125}>
          <div className="bg-black w-[1065px] h-[375px] rounded-2xl font-thin italic bg-opacity-90 border border-[#EDF0DA]">
            p3 middle
          </div>
        </PositionedElement>
      </div>
      <PositionedElement x={1205} y={285}>
      <div className="relative group transition duration-500 hover:translate-x-0.5">
      <Link href="/Pages/Self">
        <div className="bg-black w-[50px] h-[50px] rounded-full shadow-lg shadow-black"></div>
        {isMounted && (
          <div className="absolute inset-0 flex justify-center items-center">
            <Icon icon="arcticons:next-player" color="white" width="35" height="35" />
          </div>
        )}
        </Link>
      </div>
    </PositionedElement>
    </div>
  );
};

export default WealthPage;